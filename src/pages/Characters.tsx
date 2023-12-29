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
    {console.log(characters)}
    </>
  )
}
