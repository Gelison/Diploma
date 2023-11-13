import { useState } from 'react';

import { SearchIcon } from '../../assets/index';
// import { useDebounce } from '../../uilse/hooks/useDebounce';

export const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  // const debounceValue = useDebounce(value, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  return (
    <div className=' w-3/4 '>
      <form>
        <div className='flex justify-center h-10  '>
          <input
            className=' w-3/4 rounded-lg border-[1px] border-gray-500 dark:bg-graphite focus:ring-primary focus:border-primary '
            type='search'
            name='search'
            placeholder='Search'
            autoComplete='off'
            onChange={handleInputChange}
          />
          <img
            src={SearchIcon}
            alt=''
            className=' h-6 w-6 cursor-pointer mt-2 -ml-8'
          />
        </div>
      </form>
    </div>
  );
};
