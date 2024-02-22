import { Pencil } from "./icons/Pencil";
import { Trash } from "./icons/Trash";

export function Product() {
  return (
    <article className="border-gray-gray5 border rounded-[10px] max-w-[285px]">
      <figure className="py-5 px-[48.5px] border-b border-gray-gray5 flex items-center justify-center">
        <img src="https://picsum.photos/245/245" alt="Imagem randômica" />
      </figure>

      <section className="p-5 flex flex-col gap-[10px]">
        <header>
          <h2 className="font-normal text-black-black4 text-base">
            Amazon Echo Dot 5th Gen com assistente virtual Alexa deep sea blue
            110V/240V
          </h2>
        </header>

        <main className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[5px]">
            <span className="text-sm text-gray-gray2 font-normal line-through">
              R$ 429
            </span>

            <div className="flex items-center gap-[10px]">
              <span className="text-black-black4 text-2xl font-medium">
                R$ 321
              </span>

              <span className="text-green-green1 text-sm font-normal">
                25% OFF
              </span>
            </div>

            <span className="text-black-black4 font-normal text-sm">
              em
              <span className="text-green-green1">
                {" "}
                10x R$ 32,10 sem juros
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
              R$ 301 (à vista)
            </span>
          </div>
        </main>

        <footer className="flex justify-center gap-[70px] items-center p-[10px]">
          <a href="">
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
