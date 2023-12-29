import { Character } from "@/entities/character";
import { fetchAllCharacters } from "../usecases/fetchCharacters";
import { useEffect, useState } from "react";


export const Characters = () => {

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCharacters = await fetchAllCharacters();
      setCharacters(fetchedCharacters);
    };

    fetchData();
		
  }, []);


  return (
    <>
      <h1 className="text-white">Works!!!</h1>
      {characters.map((character) => (
        <p key={character.id} className="text-white">{character.name}</p>
      ))}
    </>
  )
}
