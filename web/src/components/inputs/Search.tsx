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
      className={`border-gray-gray1 border-[1px] rounded-lg px-4 py-[17px] flex items-center gap-x-4 ${className}`}
    >
      <Magnifier className="w-auto h-[19.22px] text-black-black3" />

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div className="flex-1">
        <input
          type="search"
          name={id}
          id={id}
          placeholder={placeholder}
          className="w-full font-normal"
          onInput={onInput}
          {...props}
        />
      </div>
    </div>
  );
}
