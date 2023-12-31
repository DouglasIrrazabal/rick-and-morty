import { Character } from "@/entities/character";
import { fetchAllCharacters } from "../usecases/fetchCharacters";
import { useEffect, useState } from "react";
import { Bento } from "./Bento";


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
    <div className="w-5/6 md:w-2/3 mx-auto pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {characters.map((data: Character) => (
        <Bento {...data}/>
      ))}
    </div>
  )
}
