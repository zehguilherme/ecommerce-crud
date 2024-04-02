import { Header } from "../components/Header";
import { DateTime } from "../components/inputs/DateTime";
import { Number } from "../components/inputs/Number";
import { Select } from "../components/inputs/Select";
import { Text } from "../components/inputs/Text";
import { TextArea } from "../components/inputs/TextArea";
import { File } from "../components/inputs/File";
import { Button } from "../components/Button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductRegister() {
  const [categories, setCategories] = useState(Array<string>);

  function productRegisteredSuccessfully() {
    return toast(`Produto cadastrado com sucesso!`, {
      type: "success",
    });
  }

  function productRegisteredUnsuccessfully() {
    return toast(`Erro ao enviar cadastrar o produto!`, {
      type: "error",
    });
  }

  function failedFetchCategories() {
    return toast(`Erro ao carregar as informações do campo Categoria!`, {
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

  useEffect(() => {
    fetchCategories();
  }, []);

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório!"),
    description: Yup.string().required("O campo é obrigatório!"),
    priceWithoutDiscount: Yup.string().required("O campo é obrigatório!"),
    currentPrice: Yup.string().required("O campo é obrigatório!"),
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
      name: "",
      description: "",
      priceWithoutDiscount: "",
      currentPrice: "",
      discount: "",
      installmentsNumber: "",
      deliveryDate: "",
      quantity: "",
      brand: "",
      category: "",
      image: "",
    },
    validationSchema: ProductSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://dummyjson.com/products/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name,
            description: values.description,
            priceWithoutDiscount: values.priceWithoutDiscount,
            currentPrice: values.currentPrice,
            discount: values.discount,
            installmentsNumber: values.installmentsNumber,
            deliveryDate: values.deliveryDate,
            quantity: values.quantity,
            brand: values.brand,
            category: values.category,
            image: values.image,
          }),
        });

        const newProduct = await response.json();

        console.log(newProduct);

        productRegisteredSuccessfully();

        formik.resetForm();
      } catch (error) {
        console.log("Erro ao enviar cadastrar o produto!");

        productRegisteredUnsuccessfully();
      }
    },
  });

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="sm:border sm:border-gray-gray5 sm:rounded-[20px] sm:px-[43px] sm:py-[37px] flex flex-col gap-10 max-w-[461px] mx-auto">
          <h2 className="text-black-black2 font-normal text-3xl">
            Cadastre um novo produto
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
              value={formik.values.priceWithoutDiscount}
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
              value={formik.values.discount}
              error={formik.touched.discount && formik.errors.discount}
              onBlur={formik.handleBlur}
            />

            <Number
              label="Quantidade de Parcelas"
              id="installmentsNumber"
              placeholder="12"
              onChange={formik.handleChange}
              value={formik.values.installmentsNumber}
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
              value={formik.values.deliveryDate}
              error={formik.touched.deliveryDate && formik.errors.deliveryDate}
              onBlur={formik.handleBlur}
            />

            <Number
              label="Quantidade em Estoque"
              id="quantity"
              placeholder="50"
              onChange={formik.handleChange}
              value={formik.values.quantity}
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
              text="Cadastrar novo produto"
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
