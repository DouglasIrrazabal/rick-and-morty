import { Character } from "@/entities/character";
import { CharacterRepositoryAPI } from "../repositories/characterRepositoryAPI";

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    return CharacterRepositoryAPI.fetchCharacters();
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};