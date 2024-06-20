import { ChangeEvent, FocusEvent, ReactNode } from "react";

type SelectProps = {
  label: string;
  value: string;
  className?: string;
  id: string;
  children: ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: FocusEvent<unknown, Element>) => void;
  error: string | boolean | undefined;
};

export function Select({
  label,
  value,
  className,
  id,
  children,
  onChange,
  onBlur,
  error,
}: SelectProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="rounded-lg border-[1px] border-gray-gray1 px-4 py-2">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor={id} className="text-sm font-normal text-black-black1">
            {label}
          </label>

          <select
            name={id}
            id={id}
            className="relative left-[-4px] text-lg font-normal text-gray-gray2"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            {children}
          </select>
        </div>
      </div>

      {error && (
        <span className="text-sm font-normal text-red-red1">{error}</span>
      )}
    </div>
  );
}
