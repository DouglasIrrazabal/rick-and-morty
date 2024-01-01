import { Character } from "@/entities/character";

interface CharacterListProps {
  data: Character[] | undefined;
  error: Error;
  isLoading: boolean;
}

export const CharacterList = ({data, error, isLoading}: CharacterListProps) => {
  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data?.map((data: Character) => (
        <div key={data.id} className='bg-neutral-900 rounded-2xl'>
          <img src={data.image} className='w-5/6 mt-4 sm:mt-4 rounded-2xl mx-auto'/>
          <p className='text-white text-center text-xl font-semibold m-2'>{data.name}</p>
        </div>
      ))}
    </>
  )
}
