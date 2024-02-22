import { Box } from "./icons/Box";

export function Header() {
  return (
    <header className="bg-purple">
      <nav className="flex justify-between items-center p-6 xl:px-0 max-w-[1200px] mx-auto">
        <h1>
          <a href="/">
            <Box className="text-white" />
          </a>
        </h1>

        <span className="text-3xl font-normal text-white">José Guilherme</span>
      </nav>
    </header>
  );
}
