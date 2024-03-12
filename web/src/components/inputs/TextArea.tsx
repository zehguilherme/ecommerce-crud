import { ChangeEvent, FocusEvent } from "react";

type TextAreaProps = {
  label: string;
  id: string;
  placeholder?: string;
  rows: number;
  className?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<unknown, Element>) => void;
  value: string;
  error: string | boolean | undefined;
};

export function TextArea({
  label,
  id,
  placeholder,
  rows,
  className,
  onChange,
  onBlur,
  value,
  error,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="border border-gray-gray1 rounded-lg px-4 py-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={id} className="text-black-black1 font-normal text-sm">
            {label}
          </label>

          <textarea
            id={id}
            name={id}
            rows={rows}
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
