import { ChangeEvent } from "react";

type TextProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Text({
  label,
  id,
  placeholder,
  className,
  onChange,
}: TextProps) {
  return (
    <div className="border border-gray-gray1 rounded-lg px-4 py-2">
      <div className="flex flex-col gap-[7px]">
        <label htmlFor={id} className="text-black-black1 font-normal text-sm">
          {label}
        </label>

        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          className={`text-gray-gray2 font-normal text-lg ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
