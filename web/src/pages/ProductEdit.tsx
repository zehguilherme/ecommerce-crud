import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DateTime } from "../components/inputs/DateTime";
import { Number } from "../components/inputs/Number";
import { Select } from "../components/inputs/Select";
import { Text } from "../components/inputs/Text";
import { TextArea } from "../components/inputs/TextArea";
import { File } from "../components/inputs/File";
import { Button } from "../components/Button";
import { ProductProps } from "../models/ProductProps";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

type ProductFormData = {
  created_at: string;
  name: string;
  description: string;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  discount: number;
  installmentsNumber: number;
  installmentsValue: number;
  deliveryDate: string;
  quantity: number;
  brand: string;
  category: string;
  image: string;
};

export function ProductEdit() {
  const [categories, setCategories] = useState(Array<string>);
  const [productInformation, setProductInformation] = useState<
    Omit<ProductProps, "id" | "onClick">
  >({
    created_at: new Date(),
    name: "",
    description: "",
    priceWithoutDiscount: 0,
    priceWithDiscount: 0,
    discount: 0,
    installmentsNumber: 0,
    installmentsValue: 0,
    deliveryDate: new Date(),
    quantity: 0,
    brand: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const { productId } = useParams();

  async function fetchProduct(productId: number) {
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
    const product: ProductProps = productsArray[0];

    setProductInformation(product);
  }

  function failedFetchCategories() {
    return toast(`Erro ao carregar as informações do campo Categoria!`, {
      type: "error",
    });
  }

  function productUpdatedSuccessfully() {
    return toast(`Produto atualizado com sucesso!`, {
      type: "success",
    });
  }

  function productNotUpdated() {
    return toast(`Erro ao atualizar o produto!`, {
      type: "error",
    });
  }

  function fetchCategories() {
    try {
      const categoriesArray = [
        "smartphones",
        "laptops",
        "eletrônicos",
        "eletrodomésticos",
        "fragrâncias",
        "cuidados com a pele",
        "mantimentos",
        "decoração para casa",
        "móveis",
        "tops",
        "vestidos femininos",
        "sapatos femininos",
        "camisetas masculinas",
        "sapatos masculinos",
        "relógios masculinos",
        "relógios femininos",
        "bolsas femininas",
        "joias femininas",
        "óculos de sol",
        "automóveis",
        "motocicletas",
        "iluminação",
      ];

      const categoriesArrayUppercase = categoriesArray.map(
        (category) => `${category.charAt(0).toUpperCase()}${category.slice(1)}`
      );

      setCategories(categoriesArrayUppercase);
    } catch (error) {
      failedFetchCategories();

      setCategories([]);
    }
  }

  function calculatePriceWithDiscount(
    priceWithoutDiscount: string,
    discount: string
  ): number {
    return parseInt(priceWithoutDiscount) - parseInt(discount);
  }

  function calculateInstallmentsValue(
    priceWithDiscount: string,
    installmentsNumber: string
  ): number {
    const installmentsValue =
      parseInt(priceWithDiscount) / parseInt(installmentsNumber);

    return parseFloat(installmentsValue.toFixed(2));
  }

  useEffect(() => {
    fetchCategories();

    fetchProduct(productId !== undefined ? parseInt(productId) : 0);
  }, []);

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório!"),
    description: Yup.string().required("O campo é obrigatório!"),
    priceWithoutDiscount: Yup.string().required("O campo é obrigatório!"),
    discount: Yup.string().required("O campo é obrigatório!"),
    installmentsNumber: Yup.string().required("O campo é obrigatório!"),
    deliveryDate: Yup.date().required("O campo é obrigatório!"),
    quantity: Yup.string().required("O campo é obrigatório!"),
    brand: Yup.string().required("O campo é obrigatório!"),
    category: Yup.string().required("O campo é obrigatório!"),
    image: Yup.string().required("O campo é obrigatório!"),
  });

  const formik = useFormik({
    initialValues: {
      name: productInformation.name,
      description: productInformation.description,
      priceWithoutDiscount: productInformation.priceWithoutDiscount,
      discount: productInformation.discount,
      installmentsNumber: productInformation.installmentsNumber,
      deliveryDate: productInformation.deliveryDate,
      quantity: productInformation.quantity,
      brand: productInformation.brand,
      category: productInformation.category,
      image: "",
    },
    validationSchema: ProductSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const productData: Omit<ProductFormData, "created_at"> = {
          name: values.name,
          description: values.description,
          priceWithoutDiscount: parseInt(
            values.priceWithoutDiscount.toString(10)
          ),
          priceWithDiscount: calculatePriceWithDiscount(
            values.priceWithoutDiscount.toString(),
            values.discount.toString()
          ),
          discount: parseInt(values.discount.toString()),
          installmentsNumber: parseInt(values.installmentsNumber.toString()),
          installmentsValue: calculateInstallmentsValue(
            calculatePriceWithDiscount(
              values.priceWithoutDiscount.toString(),
              values.discount.toString()
            ).toString(),
            values.installmentsNumber.toString()
          ),
          deliveryDate: `${new Date(values.deliveryDate).toISOString()}`,
          quantity: parseInt(values.quantity.toString()),
          brand: values.brand,
          category: values.category,
          image: values.image,
        };

        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Products?id=eq.${productId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              apikey: import.meta.env.VITE_SUPABASE_KEY,
            },
            body: JSON.stringify(productData),
          }
        );

        if (!response.ok) {
          productNotUpdated();

          return;
        }

        productUpdatedSuccessfully();

        navigate("/");
      } catch (error) {
        productNotUpdated();
      }
    },
  });

  const deliveryDateTimestamp = formik.values.deliveryDate;
  const date = new Date(deliveryDateTimestamp.toString());
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatedDeliveryDate = `${year}-${month}-${day}`;

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="sm:border sm:border-gray-gray5 sm:rounded-[20px] sm:px-[43px] sm:py-[37px] flex flex-col gap-10 max-w-[461px] mx-auto">
          <h2 className="text-black-black2 font-normal text-3xl">
            Edite as informações do produto
          </h2>

          <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <Text
              label="Nome"
              placeholder="Fone de Ouvido"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
            />

            <TextArea
              label="Descrição"
              placeholder="Informe uma breve descrição..."
              id="description"
              rows={8}
              onChange={formik.handleChange}
              value={formik.values.description}
              error={formik.touched.description && formik.errors.description}
              onBlur={formik.handleBlur}
            />

            <Number
              label="Preço sem desconto (original)"
              id="priceWithoutDiscount"
              placeholder="R$ 120,00"
              onChange={formik.handleChange}
              value={formik.values.priceWithoutDiscount.toString()}
              error={
                formik.touched.priceWithoutDiscount &&
                formik.errors.priceWithoutDiscount
              }
              onBlur={formik.handleBlur}
            />

            <Number
              label="Desconto"
              id="discount"
              placeholder="10 %"
              onChange={formik.handleChange}
              value={formik.values.discount.toString()}
              error={formik.touched.discount && formik.errors.discount}
              onBlur={formik.handleBlur}
            />

            <Number
              label="Quantidade de Parcelas"
              id="installmentsNumber"
              placeholder="12"
              onChange={formik.handleChange}
              value={formik.values.installmentsNumber.toString()}
              error={
                formik.touched.installmentsNumber &&
                formik.errors.installmentsNumber
              }
              onBlur={formik.handleBlur}
            />

            <DateTime
              label="Date de entrega (Prevista)"
              id="deliveryDate"
              placeholder="26/02/2024"
              onChange={formik.handleChange}
              value={formatedDeliveryDate}
              error={
                formik.touched.deliveryDate &&
                Boolean(formik.errors.deliveryDate)
              }
              onBlur={formik.handleBlur}
            />

            <Number
              label="Quantidade em Estoque"
              id="quantity"
              placeholder="50"
              onChange={formik.handleChange}
              value={formik.values.quantity.toString()}
              error={formik.touched.quantity && formik.errors.quantity}
              onBlur={formik.handleBlur}
            />

            <Text
              label="Marca"
              placeholder="Edifier"
              id="brand"
              onChange={formik.handleChange}
              value={formik.values.brand}
              error={formik.touched.brand && formik.errors.brand}
              onBlur={formik.handleBlur}
            />

            <Select
              label="Categoria"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              error={formik.touched.category && formik.errors.category}
              onBlur={formik.handleBlur}
            >
              <option value="" className="capitalize">
                Selecione uma opção...
              </option>

              {categories.map((category) => (
                <option key={category} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </Select>

            <File
              label="Imagem"
              placeholder="Escolher arquivo"
              id="image"
              acceptedTypes="image/*"
              onChange={formik.handleChange}
              value={formik.values.image}
              error={formik.touched.image && formik.errors.image}
              onBlur={formik.handleBlur}
            />

            <Button
              text="Editar informações"
              type="submit"
              className="bg-green-green1 hover:bg-green-green3 text-white"
            />
          </form>
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
