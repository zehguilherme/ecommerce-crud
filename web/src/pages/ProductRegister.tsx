import { Header } from "../components/Header";
import { Date } from "../components/inputs/Date";
import { Number } from "../components/inputs/Number";
import { Select } from "../components/inputs/Select";
import { Text } from "../components/inputs/Text";
import { TextArea } from "../components/inputs/TextArea";
import { File } from "../components/inputs/File";
import { Button } from "../components/Button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export function ProductRegister() {
  const [categories, setCategories] = useState(Array<string>);

  async function fetchCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");

    const categoriesArray: Array<string> = await response.json();

    const categoriesArrayUppercase = categoriesArray.map(
      (category) => `${category.charAt(0).toUpperCase()}${category.slice(1)}`
    );

    setCategories(categoriesArrayUppercase);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório!"),
    description: Yup.string().required("O campo é obrigatório!"),
    previousPrice: Yup.string().required("O campo é obrigatório!"),
    currentPrice: Yup.string().required("O campo é obrigatório!"),
    discount: Yup.string().required("O campo é obrigatório!"),
    installmentsNumber: Yup.string().required("O campo é obrigatório!"),
    installmentsValue: Yup.string().required("O campo é obrigatório!"),
    price: Yup.string().required("O campo é obrigatório!"),
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
      previousPrice: "",
      currentPrice: "",
      discount: "",
      installmentsNumber: "",
      installmentsValue: "",
      price: "",
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
            previousPrice: values.previousPrice,
            currentPrice: values.currentPrice,
            discount: values.discount,
            installmentsNumber: values.installmentsNumber,
            installmentsValue: values.installmentsValue,
            price: values.price,
            deliveryDate: values.deliveryDate,
            quantity: values.quantity,
            brand: values.brand,
            category: values.category,
            image: values.image,
          }),
        });

        const newProduct = await response.json();

        console.log(newProduct);

        formik.resetForm();
      } catch (error) {
        console.log("Erro ao enviar o formulário!");
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
              errorMessage={formik.errors.name}
            />

            <TextArea
              label="Descrição"
              placeholder="Informe uma breve descrição..."
              id="description"
              rows={8}
              onChange={formik.handleChange}
              value={formik.values.description}
              errorMessage={formik.errors.description}
            />

            <Number
              label="Preço anterior"
              id="previousPrice"
              placeholder="R$ 120,00"
              onChange={formik.handleChange}
              value={formik.values.previousPrice}
              errorMessage={formik.errors.previousPrice}
            />

            <Number
              label="Preço atual"
              id="currentPrice"
              placeholder="R$ 150,00"
              onChange={formik.handleChange}
              value={formik.values.currentPrice}
              errorMessage={formik.errors.currentPrice}
            />

            <Number
              label="Desconto"
              id="discount"
              placeholder="R$ 10,00"
              onChange={formik.handleChange}
              value={formik.values.discount}
              errorMessage={formik.errors.discount}
            />

            <Number
              label="Quantidade de Parcelas"
              id="installmentsNumber"
              placeholder="12"
              onChange={formik.handleChange}
              value={formik.values.installmentsNumber}
              errorMessage={formik.errors.installmentsNumber}
            />

            <Number
              label="Valor de cada parcela"
              id="installmentsValue"
              placeholder="R$ 30,00"
              onChange={formik.handleChange}
              value={formik.values.installmentsValue}
              errorMessage={formik.errors.installmentsValue}
            />

            <Number
              label="Valor à vista"
              id="price"
              placeholder="R$ 140,00"
              onChange={formik.handleChange}
              value={formik.values.price}
              errorMessage={formik.errors.price}
            />

            <Date
              label="Date de entrega (Prevista)"
              id="deliveryDate"
              placeholder="26/02/2024"
              onChange={formik.handleChange}
              value={formik.values.deliveryDate}
              errorMessage={formik.errors.deliveryDate}
            />

            <Number
              label="Quantidade em Estoque"
              id="quantity"
              placeholder="50"
              onChange={formik.handleChange}
              value={formik.values.quantity}
              errorMessage={formik.errors.quantity}
            />

            <Text
              label="Marca"
              placeholder="Edifier"
              id="brand"
              onChange={formik.handleChange}
              value={formik.values.brand}
              errorMessage={formik.errors.brand}
            />

            <Select
              label="Categoria"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              errorMessage={formik.errors.category}
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
              errorMessage={formik.errors.image}
            />

            <Button
              text="Cadastrar novo produto"
              type="submit"
              className="bg-green-green1 text-white"
            />
          </form>
        </div>
      </main>
    </div>
  );
}
