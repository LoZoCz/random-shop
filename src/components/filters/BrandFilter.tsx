import { filtersBody, uniqueBrands } from "../../utils/siteData";

type BrandFilterProps = {
  filters: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};
const BrandFilter = ({ filters, setFilters }: BrandFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl font-semibold">Brand</h4>
      <select
        name="brand-select"
        value={filters.brand}
        className="w-full min-[350px]:max-w-[16rem]"
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
      >
        <option value="">All brands</option>
        {uniqueBrands.map((brand, i) => (
          <option key={i} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
