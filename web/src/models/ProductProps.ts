export type ProductProps = {
  id: number;
  created_at: Date;
  name: string;
  description: string;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  discount: number;
  installmentsNumber: number;
  installmentsValue: number;
  deliveryDate: Date;
  quantity: number;
  brand: string;
  category: string;
  image: string;
};
