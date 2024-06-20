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
      <div className="rounded-lg border border-gray-gray1 px-4 py-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={id} className="text-sm font-normal text-black-black1">
            {label}
          </label>

          <textarea
            id={id}
            name={id}
            rows={rows}
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
