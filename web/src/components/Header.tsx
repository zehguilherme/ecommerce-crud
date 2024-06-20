import { Link } from "react-router-dom";
import { Box } from "./icons/Box";

export function Header() {
  return (
    <header className="bg-purple">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between p-6 xl:px-0">
        <h1>
          <Link to={"/"}>
            <Box className="text-white" />
          </Link>
        </h1>

        <span className="text-3xl font-normal text-white">José Guilherme</span>
      </nav>
    </header>
  );
}
