import { ChangeEvent, FocusEvent } from "react";

type DateProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<unknown, Element>) => void;
  value: string;
  error: string | boolean | undefined;
};

export function DateTime({
  label,
  id,
  placeholder,
  className,
  onChange,
  onBlur,
  value,
  error,
}: DateProps) {
  return (
    <div className="flex flex-col gap-1">
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
            onBlur={onBlur}
            value={value}
          />
        </div>
      </div>

      {error && (
        <span className="text-red-red1 font-normal text-sm">{error}</span>
      )}
    </div>
  );
}
