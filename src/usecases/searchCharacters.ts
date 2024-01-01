import { Character } from "@/entities/character";
import { CharacterRepositoryAPI } from "../repositories/characterRepositoryAPI";

export const searchCharacters = async (name: string): Promise<Character[]> => {
  try {
    return CharacterRepositoryAPI.searchCharacters(name);
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};