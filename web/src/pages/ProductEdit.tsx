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

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="sm:border sm:border-gray-gray5 sm:rounded-[20px] sm:px-[43px] sm:py-[37px] flex flex-col gap-10 max-w-[461px] mx-auto">
          <h2 className="text-black-black2 font-normal text-3xl">
            Edite as informações do produto
          </h2>

          <form className="flex flex-col gap-6">
            <Text
              label="Nome"
              placeholder="Fone de Ouvido"
              id="name"
              error=""
              value=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <TextArea
              label="Descrição"
              placeholder="Informe uma breve descrição..."
              id="description"
              rows={8}
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <Number
              label="Preço sem desconto (original)"
              id="priceWithoutDiscount"
              placeholder="R$ 120,00"
              onChange={() => {}}
              value=""
              error=""
              onBlur={() => {}}
            />

            <Number
              label="Desconto"
              id="discount"
              placeholder="10 %"
              onChange={() => {}}
              value=""
              error=""
              onBlur={() => {}}
            />

            <Number
              label="Quantidade de Parcelas"
              id="installments-number"
              placeholder="12"
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <Date
              label="Date de entrega (Prevista)"
              id="delivery-date"
              placeholder="26/02/2024"
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <Number
              label="Quantidade em Estoque"
              id="quantity"
              placeholder="50"
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <Text
              label="Marca"
              placeholder="Edifier"
              id="brand"
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
            />

            <Select
              label="Categoria"
              id="category"
              value={categorySelectedOption}
              onChange={handleCategoryChange}
              error=""
              onBlur={() => {}}
            >
              <option value="" className="capitalize">
                Selecione uma opção...
              </option>
            </Select>

            <File
              label="Imagem"
              placeholder="Escolher arquivo"
              id="image"
              acceptedTypes="image/*"
              value=""
              error=""
              onChange={() => {}}
              onBlur={() => {}}
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
