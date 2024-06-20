import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Plus } from "../components/icons/Plus";
import { Search } from "../components/inputs/Search";
import { Select } from "../components/inputs/Select";
import { Product } from "../components/Product";
import { ProductProps } from "../models/ProductProps";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "../components/icons/Spinner";

export function Home() {
  const [orderbyInput, setOrderbyInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(Array<ProductProps>);
  const [apiProducts, setApiProducts] = useState(Array<ProductProps>);
  const [isLoadingProductsList, setIsLoadingProductsList] = useState(true);

  function productsLoadedError() {
    return toast(`Erro ao carregar os produtos!`, {
      type: "error",
    });
  }

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
    try {
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

      setIsLoadingProductsList(false);
    } catch (error) {
      productsLoadedError();

      setIsLoadingProductsList(false);
    }
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

      <main className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-8 px-6 py-8 xl:px-0">
          <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between">
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
            className="flex w-full items-center justify-center gap-5 rounded-xl bg-green-green1 px-4 py-[17px] text-xl font-normal capitalize text-white hover:bg-green-green3 md:max-w-[375px]"
            title="Adicionar produto"
          >
            <Plus className="h-6 w-6" />
            Adicionar produto
          </Link>

          {isLoadingProductsList ? (
            <Spinner className="mt-4 h-10 w-10 animate-spin" />
          ) : (
            <section className="flex max-w-[895px] flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 sm:place-items-stretch sm:gap-5 md:grid-cols-3">
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
          )}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
