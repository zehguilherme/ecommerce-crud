import { Magnifier } from '../icons/Magnifier';

type SearchProps = {
  label: string;
  placeholder: string;
};

export function Search({ label, placeholder }: SearchProps) {
  return (
    <div className="border-gray-gray1 border-[1px] rounded-lg px-4 py-[17px] flex items-center gap-x-4">
      <Magnifier className="w-auto h-[19.22px] text-black-black3" />

      <label htmlFor="search-input" className="sr-only">
        {label}
      </label>

      <div className="flex-1">
        <input
          type="search"
          name="search-input"
          id="search-input"
          placeholder={placeholder}
          className="w-full font-normal"
        />
      </div>
    </div>
  );
}
