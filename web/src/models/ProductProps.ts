export type ProductProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  discount: number;
  installmentsNumber: number;
};
