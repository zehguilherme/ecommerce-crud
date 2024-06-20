import { ChangeEvent, FocusEvent } from "react";

type FileProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  acceptedTypes?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<unknown, Element>) => void;
  value: string;
  error: string | boolean | undefined;
};

export function File({
  label,
  id,
  placeholder,
  className,
  acceptedTypes,
  onChange,
  onBlur,
  value,
  error,
}: FileProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="rounded-lg border border-gray-gray1 px-4 py-2">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor={id} className="text-sm font-normal text-black-black1">
            {label}
          </label>

          <input
            type="file"
            id={id}
            name={id}
            placeholder={placeholder}
            className={`text-lg font-normal text-gray-gray2 ${className}`}
            onChange={onChange}
            accept={acceptedTypes}
            value={value}
            onBlur={onBlur}
          />
        </div>
      </div>

      {error && (
        <span className="text-sm font-normal text-red-red1">{error}</span>
      )}
    </div>
  );
}
