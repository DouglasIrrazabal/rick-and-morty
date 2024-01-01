import { useState } from 'react';
import { CharacterSearch } from './components/CharacterSearch';
import { useCharacters } from './hooks/useCharacters';
import { CharacterList } from './components/CharacterList';

export const Home = () => {
  const [searchText, setSearchText] = useState('');
  const {data, error, isLoading} = useCharacters(searchText);

  return (
    <div className='w-5/6 md:w-2/3 mx-auto'>
      <div className='pt-4'>
        <CharacterSearch text={searchText} setText={setSearchText} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        <CharacterList data={data} error={error as Error} isLoading={isLoading} />
      </div>
    </div>
  )
}
