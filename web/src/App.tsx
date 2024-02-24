import { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { Plus } from "./components/icons/Plus";
import { Search } from "./components/inputs/Search";
import { Select } from "./components/inputs/Select";
import { Product } from "./components/Product";

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
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto">
        <div className="px-6 py-8 xl:px-0 flex flex-col items-center gap-8">
          <div className="gap-8 flex flex-col w-full md:flex-row md:justify-between">
            <Search
              label="Pesquisar"
              placeholder="Procurando por algo específico?"
              onChange={handleSearchInputChange}
              className="w-full md:max-w-[375px]"
            />

            <Select
              labelText="Ordenar por"
              options={orderbyHtmlElementOptions}
              onChange={handleOrderbyChange}
              value={orderbySelectedOption}
              className="w-full md:max-w-[375px]"
            />
          </div>

          <a
            href="/"
            className="capitalize bg-green-green1 px-4 py-[17px] rounded-xl w-full md:max-w-[375px] text-white font-normal text-xl flex justify-center items-center gap-5"
          >
            <Plus className="w-6 h-6" />
            Adicionar produto
          </a>

          <section className="flex flex-col items-center gap-8 sm:gap-5 sm:grid sm:place-items-center sm:grid-cols-2 md:grid-cols-3 max-w-[895px]">
            <Product />

            <Product />

            <Product />

            <Product />

            <Product />

            <Product />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
