import { Character } from "@/entities/character";
import { CharacterRepositoryAPI } from "../repositories/characterRepositoryAPI";

export const fetchAllCharacters = async (): Promise<Character[]> => {
  try {
    return CharacterRepositoryAPI.fetchAllCharacters();
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};