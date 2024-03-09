import { ChangeEvent } from "react";

type TextAreaProps = {
  label: string;
  id: string;
  placeholder?: string;
  rows: number;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  errorMessage: string | undefined;
};

export function TextArea({
  label,
  id,
  placeholder,
  rows,
  className,
  onChange,
  value,
  errorMessage,
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
            value={value}
          />
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
