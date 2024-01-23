import type { Metadata } from "next";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Home",
  description: "E-commerce - Gerenciamento de produtos",
};

export default function Home() {
  return <Header />;
}
