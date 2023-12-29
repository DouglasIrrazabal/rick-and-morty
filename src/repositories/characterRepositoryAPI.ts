import { Character } from "@/entities/character";
import { CharacterResponse } from "@/entities/characterResponse";
import axios from "axios";

const BASE_URL_API = 'https://rickandmortyapi.com/api';

export const CharacterRepositoryAPI = {
  fetchAllCharacters: async () => {
    try {
      const response = await axios.get<CharacterResponse>(`${BASE_URL_API}/character`);
      const characters = response.data.results;
      const charactersAdapted: Character[] = characters.map((data) => ({
        id: data.id,
        name: data.name,
        status: data.status,
        image: data.image
      }));
  
      return charactersAdapted;
    } catch (error) {
      throw new Error('Failed to fetch characters from API');
    }
  },
};