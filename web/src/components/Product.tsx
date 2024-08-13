import { Link } from "react-router-dom";
import { ProductProps } from "../schemas/ProductProps";
import { Pencil } from "./icons/Pencil";
import { Trash } from "./icons/Trash";
import { Box } from "./icons/Box";

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
    <article className="max-h-[596px] w-[285px] max-w-[285px] rounded-[10px] border border-gray-gray5 sm:w-auto">
      <figure className="flex items-center justify-center border-b border-gray-gray5 p-5">
        {image.includes("https://") ? (
          <img
            src={image}
            alt={description}
            className="h-[245px] w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-[245px] w-full flex-col items-center justify-center gap-5 text-gray-gray2">
            <Box className="h-auto w-12" />

            <span className="text-center">Imagem não encontrada</span>
          </div>
        )}
      </figure>

      <section className="flex h-[311px] flex-col justify-between gap-[10px] p-5">
        <header>
          <h2 className="line-clamp-3 h-[51px] text-base font-normal text-black-black4">
            {name} - {description}
          </h2>
        </header>

        <main className="flex flex-col items-start gap-[10px]">
          <div className="flex flex-col gap-[5px]">
            <span className="text-sm font-normal text-gray-gray2 line-through">
              R${" "}
              {convertPointValueToCommaValue(
                parseFloat(priceWithoutDiscount.toFixed(2))
              )}
            </span>

            <div className="flex items-center gap-[10px]">
              <span className="text-2xl font-medium text-black-black4">
                R${" "}
                {convertPointValueToCommaValue(
                  parseFloat(priceWithDiscount.toFixed(2))
                )}
              </span>

              <span className="text-sm font-normal text-green-green1">
                {convertPointValueToCommaValue(discount)}% OFF
              </span>
            </div>

            <span className="text-sm font-normal text-black-black4">
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

          <span className="bg-green-green2 px-[5px] py-[2px] text-sm font-semibold text-green-green1">
            Chegará grátis segunda-feira
          </span>

          <span className="w-full border border-gray-gray5"></span>

          <div className="flex flex-col gap-[10px]">
            <span className="text-sm font-normal text-gray-gray2">
              Outras opções de compra:
            </span>

            <span className="text-sm font-normal text-black-black4">
              R${" "}
              {convertPointValueToCommaValue(
                parseFloat(priceWithDiscount.toFixed(2))
              )}{" "}
              (à vista)
            </span>
          </div>
        </main>

        <footer className="flex items-center justify-center gap-[70px] p-[10px]">
          <Link to={`/produto/${id}`} title="Editar">
            <Pencil className="h-6 w-6 text-gray-gray3 hover:opacity-75" />
          </Link>

          <button type="button" onClick={onClick} title="Excluir">
            <Trash className="h-6 w-6 text-red-red1 hover:opacity-75" />
          </button>
        </footer>
      </section>
    </article>
  );
}
