import ProductsOptions from "./ProductsOptions";
import SearchBar from "./SearchBar";
import UserOptions from "./UserOptions";

type HeaderOptionsProps = {
  openNav: boolean;
};

const HeaderOptions = ({ openNav }: HeaderOptionsProps) => {
  const isOpen = openNav ? "flex" : "hidden";

  return (
    <div
      className={`flex items-center justify-between w-full header headerOptions ${isOpen}`}
    >
      <ProductsOptions />
      <SearchBar />
      <UserOptions />
    </div>
  );
};

export default HeaderOptions;
