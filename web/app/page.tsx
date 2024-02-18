'use client';

import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/inputs/Search';
import { Select } from './components/inputs/Select';
import Link from 'next/link';
import { Plus } from './components/icons/Plus';

export default function Home() {
  const [orderbySelectedOption, setOrderbySelectedOption] = useState('');

  const orderbyHtmlElementOptions = [
    {
      value: 'menor-valor',
      label: 'Menor Valor',
    },
    {
      value: 'maior-valor',
      label: 'Maior Valor',
    },
  ];

  function handleOrderbyChange(event: ChangeEvent<HTMLSelectElement>) {
    setOrderbySelectedOption(event.target.value);
  }

  return (
    <>
      <Header />

      <main className="px-6 py-8">
        <div className="flex flex-col gap-8">
          <Search
            label="Pesquisar"
            placeholder="Procurando por algo específico?"
          />

          <Select
            labelText="Ordenar por"
            options={orderbyHtmlElementOptions}
            onChange={handleOrderbyChange}
            value={orderbySelectedOption}
          />

          <Link
            href={'/'}
            className="capitalize bg-green-green1 px-4 py-[17px] rounded-xl w-full text-white font-normal text-xl flex justify-center items-center gap-5"
          >
            <Plus className="w-6 h-6" />
            Adicionar produto
          </Link>
        </div>
      </main>
    </>
  );
}
