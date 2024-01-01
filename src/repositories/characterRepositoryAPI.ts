import { Character } from "@/entities/character";
import { CharacterResponse } from "@/entities/characterResponse";
import axios from "axios";

const BASE_URL_API = 'https://rickandmortyapi.com/api/character';

export const CharacterRepositoryAPI = {
  fetchCharacters: async () => {
    try {
      const response = await axios.get<CharacterResponse>(`${BASE_URL_API}`);
      const characters = response.data.results;
      const charactersAdapted: Character[] = characters.map((data) => ({
        id: data.id,
        name: data.name,
        status: data.status,
        gender: data.gender,
        image: data.image
      }));
  
      return charactersAdapted;
    } catch (error) {
      throw new Error('Failed to fetch characters from API');
    }
  },
  searchCharacters: async (name: string) => {
    try {
      const response = await axios.get<CharacterResponse>(`${BASE_URL_API}?name=${name}`);
      const characters = response.data.results;
      const charactersAdapted: Character[] = characters.map((data) => ({
        id: data.id,
        name: data.name,
        status: data.status,
        gender: data.gender,
        image: data.image
      }));
  
      return charactersAdapted;
    } catch (error) {
      throw new Error('Failed to fetch the next page from API');
    }
  },
};