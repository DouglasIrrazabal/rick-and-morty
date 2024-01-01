import { useQuery } from "react-query";
import { CharacterRepositoryAPI } from "../../../repositories/characterRepositoryAPI";

export const useCharacters = (searchText: string) => useQuery({
  queryKey: ['searchCharacters', searchText],
  queryFn: () => CharacterRepositoryAPI.searchCharacters(searchText),
});