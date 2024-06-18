import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Plus } from "../components/icons/Plus";
import { Search } from "../components/inputs/Search";
import { Select } from "../components/inputs/Select";
import { Product } from "../components/Product";
import { ProductProps } from "../models/ProductProps";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export function Home() {
  const [orderbyInput, setOrderbyInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(Array<ProductProps>);
  const [apiProducts, setApiProducts] = useState(Array<ProductProps>);

  function handleSearchInputChange(event: FormEvent<HTMLInputElement>) {
    const currentSearchInputValue = event.currentTarget.value;

    setSearchInput(currentSearchInputValue.toLowerCase());
  }

  function handleOrderbyChange(event: ChangeEvent<HTMLSelectElement>) {
    const currentOrderbyInputValue = event.target.value;

    setOrderbyInput(currentOrderbyInputValue);
  }

  function getFilteredProducts() {
    let filteredProducts = apiProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput) ||
        product.priceWithDiscount.toString().includes(searchInput) ||
        product.priceWithoutDiscount.toString().includes(searchInput) ||
        product.discount.toString().toLowerCase().includes(searchInput)
      );
    });

    if (orderbyInput === "lowestValue") {
      filteredProducts = filteredProducts.sort((productA, productB) => {
        return productA.priceWithDiscount - productB.priceWithDiscount;
      });
    }

    if (orderbyInput === "biggestValue") {
      filteredProducts = filteredProducts.sort((productA, productB) => {
        return productB.priceWithDiscount - productA.priceWithDiscount;
      });
    }

    return filteredProducts;
  }

  function productDeletedSuccessfully() {
    return toast(`Produto excluído com sucesso!`, {
      type: "success",
    });
  }

  function productNotDeleted() {
    return toast(`Erro ao excluir o produto!`, {
      type: "error",
    });
  }

  async function fetchProduct(productId: number): Promise<number> {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Products?id=eq.${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_KEY,
        },
      }
    );

    const productsArray = await response.json();
    const { id }: ProductProps = productsArray[0];

    return id;
  }

  async function deleteProduct(productId: number) {
    await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Products?id=eq.${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_KEY,
        },
      }
    );
  }

  async function handleDeleteProduct(productId: number, productName: string) {
    const productDeleteIsConfirmed = confirm(
      `Deseja realmente excluir o produto ${productName}?`
    );

    try {
      if (productDeleteIsConfirmed) {
        const responseProductId = await fetchProduct(productId);

        await deleteProduct(responseProductId);

        productDeletedSuccessfully();

        fetchProductsData();
      }
    } catch (error) {
      productNotDeleted();
    }
  }

  async function fetchProductsData() {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: `${import.meta.env.VITE_SUPABASE_KEY}`,
        },
      }
    );

    const products = await response.json();

    setApiProducts(products);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    setFilteredProducts(getFilteredProducts());
  }, [orderbyInput, searchInput]);

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto">
        <div className="px-6 py-8 xl:px-0 flex flex-col items-center gap-8">
          <div className="gap-8 flex flex-col w-full md:flex-row md:justify-between">
            <Search
              label="Pesquisar"
              placeholder="Procurando por algo específico?"
              id="product-search"
              onInput={handleSearchInputChange}
              className="w-full md:max-w-[375px]"
            />

            <Select
              label="Ordenar por"
              onChange={handleOrderbyChange}
              value={orderbyInput}
              className="w-full md:max-w-[375px]"
              id="orderby"
              error=""
              onBlur={() => {}}
            >
              <option value="" className="capitalize">
                Selecione uma opção...
              </option>

              <option value="lowestValue" className="capitalize">
                Menor valor
              </option>

              <option value="biggestValue" className="capitalize">
                Maior valor
              </option>
            </Select>
          </div>

          <Link
            to="/produto"
            className="capitalize bg-green-green1 hover:bg-green-green3 px-4 py-[17px] rounded-xl w-full md:max-w-[375px] text-white font-normal text-xl flex justify-center items-center gap-5"
          >
            <Plus className="w-6 h-6" />
            Adicionar produto
          </Link>

          <section className="flex flex-col items-center gap-8 sm:gap-5 sm:grid sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 max-w-[895px]">
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    priceWithoutDiscount={product.priceWithoutDiscount}
                    priceWithDiscount={product.priceWithDiscount}
                    discount={product.discount}
                    installmentsNumber={product.installmentsNumber}
                    created_at={product.created_at}
                    brand={product.brand}
                    category={product.category}
                    deliveryDate={product.deliveryDate}
                    installmentsValue={product.installmentsValue}
                    quantity={product.quantity}
                    onClick={() =>
                      handleDeleteProduct(product.id, product.name)
                    }
                  />
                ))
              : apiProducts.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    priceWithoutDiscount={product.priceWithoutDiscount}
                    priceWithDiscount={product.priceWithDiscount}
                    discount={product.discount}
                    installmentsNumber={product.installmentsNumber}
                    created_at={product.created_at}
                    brand={product.brand}
                    category={product.category}
                    deliveryDate={product.deliveryDate}
                    installmentsValue={product.installmentsValue}
                    quantity={product.quantity}
                    onClick={() =>
                      handleDeleteProduct(product.id, product.name)
                    }
                  />
                ))}
          </section>
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
