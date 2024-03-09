import { ChangeEvent, ReactNode } from "react";

type SelectProps = {
  label: string;
  value: string;
  className?: string;
  id: string;
  children: ReactNode;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  errorMessage: string | undefined;
};

export function Select({
  label,
  value,
  className,
  id,
  children,
  onChange,
  errorMessage,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
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
            {children}
          </select>
        </div>
      </div>

      {errorMessage ? (
        <span className="text-red-red1 font-normal text-sm">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
