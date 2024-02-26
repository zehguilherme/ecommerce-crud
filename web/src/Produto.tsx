import { Header } from "./components/Header";
import { Text } from "./components/inputs/Text";
import { TextArea } from "./components/inputs/TextArea";

export function Produto() {
  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-10">
        <h2 className="text-black-black2 font-normal text-3xl">
          Cadastre um novo produto
        </h2>

        <form className="flex flex-col gap-6">
          <Text label="Nome" placeholder="Fone de Ouvido" id="name" />

          <TextArea
            label="Descrição"
            placeholder="Informe uma breve descrição..."
            id="description"
            rows={8}
          />
        </form>
      </main>
    </div>
  );
}
