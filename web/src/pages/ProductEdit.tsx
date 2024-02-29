import { ChangeEvent, useState } from "react";
import { Header } from "../components/Header";
import { Date } from "../components/inputs/Date";
import { Number } from "../components/inputs/Number";
import { Select } from "../components/inputs/Select";
import { Text } from "../components/inputs/Text";
import { TextArea } from "../components/inputs/TextArea";
import { File } from "../components/inputs/File";
import { Button } from "../components/Button";

export function ProductEdit() {
  const [categorySelectedOption, setCategorySelectedOption] = useState("");

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCategorySelectedOption(event.target.value);
  }

  const categoryHtmlElementOptions = [
    {
      value: "",
      label: "Selecione uma opção...",
    },
    {
      value: "eletronicos",
      label: "Eletrônicos",
    },
    {
      value: "roupas",
      label: "Roupas",
    },
    {
      value: "acessorios",
      label: "Acessórios",
    },
    {
      value: "livros",
      label: "Livros",
    },
    {
      value: "alimentos",
      label: "Alimentos",
    },
    {
      value: "moveis",
      label: "Móveis",
    },
    {
      value: "esportes",
      label: "Artigos Esportivos",
    },
    {
      value: "beleza",
      label: "Produtos de Beleza",
    },
    {
      value: "brinquedos",
      label: "Brinquedos",
    },
  ];

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="sm:border sm:border-gray-gray5 sm:rounded-[20px] sm:px-[43px] sm:py-[37px] flex flex-col gap-10 max-w-[461px] mx-auto">
          <h2 className="text-black-black2 font-normal text-3xl">
            Edite as informações do produto
          </h2>

          <form className="flex flex-col gap-6">
            <Text label="Nome" placeholder="Fone de Ouvido" id="name" />

            <TextArea
              label="Descrição"
              placeholder="Informe uma breve descrição..."
              id="description"
              rows={8}
            />

            <Number
              label="Preço anterior"
              id="previous-price"
              placeholder="R$ 120,00"
            />

            <Number
              label="Preço atual"
              id="current-price"
              placeholder="R$ 150,00"
            />

            <Number label="Desconto" id="discount" placeholder="R$ 10,00" />

            <Number
              label="Quantidade de Parcelas"
              id="installments-number"
              placeholder="12"
            />

            <Number
              label="Valor de cada parcela"
              id="installments-value"
              placeholder="R$ 30,00"
            />

            <Number
              label="Valor à vista"
              id="R$ 140,00"
              placeholder="R$ 140,00"
            />

            <Date
              label="Date de entrega (Prevista)"
              id="delivery-date"
              placeholder="26/02/2024"
            />

            <Number
              label="Quantidade em Estoque"
              id="quantity"
              placeholder="50"
            />

            <Text label="Marca" placeholder="Edifier" id="brand" />

            <Select
              label="Categoria"
              id="category"
              options={categoryHtmlElementOptions}
              value={categorySelectedOption}
              onChange={handleCategoryChange}
            />

            <File
              label="Imagem"
              placeholder="Escolher arquivo"
              id="image"
              acceptedTypes="image/*"
            />

            <Button
              text="Editar informações"
              type="submit"
              className="bg-green-green1 text-white"
              onClick={() => {}}
            />
          </form>
        </div>
      </main>
    </div>
  );
}
