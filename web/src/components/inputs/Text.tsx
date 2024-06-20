import { ChangeEvent, FocusEvent } from "react";

type TextProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<unknown, Element>) => void;
  value: string;
  error: string | boolean | undefined;
};

export function Text({
  label,
  id,
  placeholder,
  className,
  onChange,
  onBlur,
  value,
  error,
}: TextProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="rounded-lg border border-gray-gray1 px-4 py-2">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor={id} className="text-sm font-normal text-black-black1">
            {label}
          </label>

          <input
            type="text"
            id={id}
            name={id}
            placeholder={placeholder}
            className={`text-lg font-normal text-black-black4 ${className}`}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        </div>
      </div>

      {error && (
        <span className="text-sm font-normal text-red-red1">{error}</span>
      )}
    </div>
  );
}
