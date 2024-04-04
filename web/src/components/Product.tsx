import { Link } from "react-router-dom";
import { ProductProps } from "../models/ProductProps";
import { Pencil } from "./icons/Pencil";
import { Trash } from "./icons/Trash";

export function Product({
  id,
  image,
  name,
  description,
  priceWithDiscount,
  priceWithoutDiscount,
  discount,
  installmentsNumber,
  onClick,
}: ProductProps) {
  function convertPointValueToCommaValue(pointValue: number): string {
    const commaValue = pointValue.toString().replace(/\./g, ",");

    return commaValue;
  }

  return (
    <article className="border-gray-gray5 border rounded-[10px] max-w-[285px] max-h-[596px]">
      <figure className="p-5 border-b border-gray-gray5 flex items-center justify-center">
        {image.includes("https://") ? (
          <img
            src={image}
            alt={description}
            className="w-full h-[245px] object-cover object-center"
          />
        ) : (
          <div className="w-full h-[245px] flex justify-center items-center">
            <span className="text-gray-gray2 text-center">
              Nenhuma imagem a ser exibida
            </span>
          </div>
        )}
      </figure>

      <section className="p-5 flex flex-col gap-[10px] justify-between">
        <header>
          <h2 className="font-normal text-black-black4 text-base line-clamp-2 min-h-[33.78px]">
            {name} - {description}
          </h2>
        </header>

        <main className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[5px]">
            <span className="text-sm text-gray-gray2 font-normal line-through">
              R${" "}
              {convertPointValueToCommaValue(
                parseFloat(priceWithoutDiscount.toFixed(2))
              )}
            </span>

            <div className="flex items-center gap-[10px]">
              <span className="text-black-black4 text-2xl font-medium">
                R${" "}
                {convertPointValueToCommaValue(
                  parseFloat(priceWithDiscount.toFixed(2))
                )}
              </span>

              <span className="text-green-green1 text-sm font-normal">
                {convertPointValueToCommaValue(discount)}% OFF
              </span>
            </div>

            <span className="text-black-black4 font-normal text-sm">
              em
              <span className="text-green-green1">
                {" "}
                {installmentsNumber}x R${" "}
                {convertPointValueToCommaValue(
                  parseFloat((priceWithDiscount / 10).toFixed(2))
                )}{" "}
                sem juros
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
              R${" "}
              {convertPointValueToCommaValue(
                parseFloat(priceWithDiscount.toFixed(2))
              )}{" "}
              (à vista)
            </span>
          </div>
        </main>

        <footer className="flex justify-center gap-[70px] items-center p-[10px]">
          <Link to={`/produto/editar/${id}`}>
            <Pencil className="w-6 h-6 text-gray-gray3" />
          </Link>

          <button type="button" onClick={onClick}>
            <Trash className="w-6 h-6 text-red-red1" />
          </button>
        </footer>
      </section>
    </article>
  );
}
