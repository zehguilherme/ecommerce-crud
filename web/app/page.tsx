'use client';

import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/inputs/Search';
import { Select } from './components/inputs/Select';

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
      </main>
    </>
  );
}
