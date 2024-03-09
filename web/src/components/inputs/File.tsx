import { ChangeEvent } from "react";

type FileProps = {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  acceptedTypes?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage: string | undefined;
};

export function File({
  label,
  id,
  placeholder,
  className,
  acceptedTypes,
  onChange,
  value,
  errorMessage,
}: FileProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="border border-gray-gray1 rounded-lg px-4 py-2">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor={id} className="text-black-black1 font-normal text-sm">
            {label}
          </label>

          <input
            type="file"
            id={id}
            name={id}
            placeholder={placeholder}
            className={`text-gray-gray2 font-normal text-lg ${className}`}
            onChange={onChange}
            accept={acceptedTypes}
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
