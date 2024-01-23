import Link from "next/link";
import { Box } from "./icons/Box";

export function Header() {
  return (
    <header className="bg-purple">
      <nav className="flex justify-between items-center p-6">
        <Link href="/">
          <Box />
        </Link>

        <span className="text-3xl font-normal text-white">José Guilherme</span>
      </nav>
    </header>
  );
}
