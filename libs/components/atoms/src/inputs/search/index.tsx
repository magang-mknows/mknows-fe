import { FC, ReactElement } from 'react';
import { SearchProps } from './types';
import IconSearch from './ic-search';

export const SearchInput: FC<SearchProps> = ({
  onChange,
  value,
}): ReactElement => {
  return (
    <div className="px-8 lg:px-1 items-center w-full">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          id="simple-search"
          className="bg-neutral-100 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
};
export default SearchInput;
