import { ChangeEvent } from "react";

type DateProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Date({
  label,
  id,
  placeholder,
  className,
  onChange,
}: DateProps) {
  return (
    <div className="border border-gray-gray1 rounded-lg px-4 py-2">
      <div className="flex flex-col gap-[7px]">
        <label htmlFor={id} className="text-black-black1 font-normal text-sm">
          {label}
        </label>

        <input
          type="date"
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
