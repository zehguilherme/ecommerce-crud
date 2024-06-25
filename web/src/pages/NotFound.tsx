import { Link } from "react-router-dom";
import { Box } from "../components/icons/Box";

export function NotFound() {
  return (
    <div className="h-screen bg-white">
      <main className="flex h-screen flex-col items-center justify-center gap-20 px-6 py-8">
        <h1 className="text-center text-3xl font-normal">
          Página não encontrada!
        </h1>

        <Box className="w-28" />

        <Link
          to={"/"}
          className="rounded-xl bg-green-green1 px-4 py-[17px] text-center text-xl font-normal text-white hover:bg-green-green3"
        >
          Voltar para a Home
        </Link>
      </main>
    </div>
  );
}
