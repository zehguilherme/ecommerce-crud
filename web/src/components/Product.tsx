import { ProductProps } from "../models/ProductProps";
import { Pencil } from "./icons/Pencil";
import { Trash } from "./icons/Trash";

export function Product({
  id,
  thumbnail,
  title,
  description,
  price,
  discountPercentage,
}: ProductProps) {
  function convertPointValueToCommaValue(pointValue: number): string {
    const commaValue = pointValue.toString().replace(/\./g, ",");

    return commaValue;
  }

  function convertPercentageNumberToDecimalNumber(
    percentageNumber: number
  ): number {
    return percentageNumber / 100;
  }

  function calculatePriceWithoutDiscount(): string {
    return (
      price /
      (1 - convertPercentageNumberToDecimalNumber(discountPercentage))
    ).toFixed(2);
  }

  return (
    <article className="border-gray-gray5 border rounded-[10px] max-w-[285px] max-h-[596px]">
      <figure className="p-5 border-b border-gray-gray5 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={description}
          className="w-full h-[245px] object-cover object-center"
        />
      </figure>

      <section className="p-5 flex flex-col gap-[10px] justify-between">
        <header>
          <h2 className="font-normal text-black-black4 text-base line-clamp-2">
            {title} - {description}
          </h2>
        </header>

        <main className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[5px]">
            <span className="text-sm text-gray-gray2 font-normal line-through">
              R${" "}
              {convertPointValueToCommaValue(
                Number(calculatePriceWithoutDiscount())
              )}
            </span>

            <div className="flex items-center gap-[10px]">
              <span className="text-black-black4 text-2xl font-medium">
                R$ {price}
              </span>

              <span className="text-green-green1 text-sm font-normal">
                {convertPointValueToCommaValue(discountPercentage)}% OFF
              </span>
            </div>

            <span className="text-black-black4 font-normal text-sm">
              em
              <span className="text-green-green1">
                {" "}
                10x R$ {convertPointValueToCommaValue(price / 10)} sem juros
              </span>{" "}
            </span>
          </div>

          <span className="text-green-green1 text-sm font-semibold px-[5px] py-[2px] bg-green-green2 max-w-[181px]">
            Chegará grátis segunda-feira
          </span>

          <span className="border border-gray-gray5"></span>

          <div className="flex flex-col gap-[10px]">
            <span className="text-sm text-gray-gray2 font-normal">
              Outras opções de compra:
            </span>

            <span className="text-black-black4 text-sm font-normal">
              R$ {price} (à vista)
            </span>
          </div>
        </main>

        <footer className="flex justify-center gap-[70px] items-center p-[10px]">
          <a href="/produto/editar">
            <Pencil className="w-6 h-6 text-gray-gray3" />
          </a>

          <a href="">
            <Trash className="w-6 h-6 text-red-red1" />
          </a>
        </footer>
      </section>
    </article>
  );
}
