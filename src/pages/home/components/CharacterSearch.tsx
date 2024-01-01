interface CharacterSearchProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const CharacterSearch = ({text, setText}: CharacterSearchProps) => {
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    setText(searchTerm);
  };
  
  return (
    <input
      className="w-full text-white rounded-2xl bg-neutral-900 p-3 outline-none"
      type="text"
      value={text}
      onChange={handleInputChange}
      placeholder="Type to search characters"
    />
  )
}
