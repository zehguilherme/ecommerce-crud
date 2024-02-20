import { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { Plus } from "./components/icons/Plus";
import { Search } from "./components/inputs/Search";
import { Select } from "./components/inputs/Select";
import { Product } from "./components/Product";
import "./index.css";

function App() {
  const [orderbySelectedOption, setOrderbySelectedOption] = useState("");

  const orderbyHtmlElementOptions = [
    {
      value: "menor-valor",
      label: "Menor Valor",
    },
    {
      value: "maior-valor",
      label: "Maior Valor",
    },
  ];

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  function handleOrderbyChange(event: ChangeEvent<HTMLSelectElement>) {
    setOrderbySelectedOption(event.target.value);
  }

  return (
    <>
      <Header />

      <main className="max-w-[1200px] mx-auto">
        <div className="px-6 py-8 xl:px-0 flex flex-col xl:items-center gap-8">
          <div className="gap-8 flex flex-col xl:flex-row xl:w-full xl:justify-between">
            <Search
              label="Pesquisar"
              placeholder="Procurando por algo específico?"
              onChange={handleSearchInputChange}
              className="xl:min-w-[375px]"
            />

            <Select
              labelText="Ordenar por"
              options={orderbyHtmlElementOptions}
              onChange={handleOrderbyChange}
              value={orderbySelectedOption}
              className="xl:min-w-[375px]"
            />
          </div>

          <a
            href="/"
            className="capitalize bg-green-green1 px-4 py-[17px] rounded-xl w-full xl:max-w-[375px] text-white font-normal text-xl flex justify-center items-center gap-5"
          >
            <Plus className="w-6 h-6" />
            Adicionar produto
          </a>

          <Product />
        </div>
      </main>
    </>
  );
}

export default App;
