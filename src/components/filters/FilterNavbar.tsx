import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RateFilter from "./RateFilter";
import StockfFilter from "./StockfFilter";
import { filtersBody } from "../../utils/siteData";

type FilternavbarProps = {
  filters: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};

const FilterNavbar = ({ filters, setFilters }: FilternavbarProps) => {
  const resetFilters = () => {
    setFilters({
      brand: "",
      stock: "",
      price: "",
      rating: 1,
    });
  };

  return (
    <nav className="flex flex-col gap-8 h-fit justify-center-center">
      <h1 className="text-4xl font-bold">Filters</h1>
      <div className="grid gap-4 bg-sky-100 md:flex md:gap-8 md:items-center md:flex-wrap">
        <BrandFilter filters={filters} setFilters={setFilters} />
        <StockfFilter filters={filters} setFilters={setFilters} />
        <PriceFilter filters={filters} setFilters={setFilters} />
        <RateFilter filters={filters} setFilters={setFilters} />
        <button
          onClick={() => resetFilters()}
          className="border-sky-300 border-solid border-2 px-4 py-1 rounded-md text-slate-950"
        >
          Reset filters
        </button>
      </div>
    </nav>
  );
};

export default FilterNavbar;
