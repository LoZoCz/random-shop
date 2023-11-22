import Logo_options from "./Logo_options";
import User_options from "./User_options";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header
      data-name="main-head"
      className="bg-sky-400 text-white flex justify-between items-center px-8 py-8"
    >
      <Logo_options />
      <SearchBar />
      <User_options />
    </header>
  );
};

export default Header;
