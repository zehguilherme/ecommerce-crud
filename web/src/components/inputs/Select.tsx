import React, { ChangeEvent } from 'react';

type SelectProps = {
  labelText: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ labelText, options, value, onChange }: SelectProps) {
  return (
    <div className="border-gray-gray1 border-[1px] rounded-lg px-4 py-2">
      <div className="flex flex-col gap-[7px]">
        <label
          htmlFor="select-element"
          className="text-sm text-black-black1 font-normal"
        >
          {labelText}
        </label>

        <select
          name="select-element"
          id="select-element"
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
