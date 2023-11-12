import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [userQuery, setUserQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ pathname: `/search`, search: `?q=${userQuery}` });
  };

  return (
    <form
      className="bg-sky-400 rounded-md flex gap-8 w-1/3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search..."
        className="outline-none rounded-md px-2 py-1 text-slate-950 text-2xl flex-1"
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
      />
      <button
        type="submit"
        className="border-sky-300 border-2 border-solid p-2 rounded-md hover:border-white transition-all"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchBar;
