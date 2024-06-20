import { FormEvent } from "react";
import { Magnifier } from "../icons/Magnifier";

type SearchProps = {
  label: string;
  placeholder?: string;
  id: string;
  className?: string;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
};

export function Search({
  label,
  placeholder,
  id,
  className,
  onInput,
  ...props
}: SearchProps) {
  return (
    <div
      className={`flex items-center gap-x-4 rounded-lg border-[1px] border-gray-gray1 px-4 py-[17px] ${className}`}
    >
      <Magnifier className="h-[19.22px] w-auto text-black-black3" />

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div className="flex-1">
        <input
          type="search"
          name={id}
          id={id}
          placeholder={placeholder}
          className="w-full font-normal text-black-black4"
          onInput={onInput}
          {...props}
        />
      </div>
    </div>
  );
}
