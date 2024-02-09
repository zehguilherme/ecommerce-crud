import type { Metadata } from 'next';
import { Header } from './components/Header';
import { Search } from './components/inputs/Search';

export const metadata: Metadata = {
  title: 'Home',
  description: 'E-commerce - Gerenciamento de produtos',
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-6 py-8">
        <Search
          label="Pesquisar"
          placeholder="Procurando por algo específico?"
        />
      </main>
    </>
  );
}
