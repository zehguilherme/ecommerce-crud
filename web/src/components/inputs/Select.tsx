import { ChangeEvent } from "react";

type SelectProps = {
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  className?: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  label,
  options,
  value,
  className,
  id,
  onChange,
}: SelectProps) {
  return (
    <div
      className={`border-gray-gray1 border-[1px] rounded-lg px-4 py-2 ${className}`}
    >
      <div className="flex flex-col gap-[7px]">
        <label htmlFor={id} className="text-sm text-black-black1 font-normal">
          {label}
        </label>

        <select
          name={id}
          id={id}
          className="text-gray-gray2 font-normal text-lg relative left-[-4px]"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="capitalize"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
