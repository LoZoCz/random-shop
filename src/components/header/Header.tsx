import Logo_options from "./Logo_options";
import User_options from "./User_options";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-sky-400 text-white flex justify-between items-center h-28 px-8">
      <Logo_options />
      <SearchBar />
      <User_options />
    </header>
  );
};

export default Header;
