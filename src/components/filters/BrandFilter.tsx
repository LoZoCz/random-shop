import { filtersBody, uniqueBrands } from "../../utils/siteData";

type BrandFilterProps = {
  filters: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};
const BrandFilter = ({ filters, setFilters }: BrandFilterProps) => {
  return (
    <div data-name="brand-filter" className="flex flex-col gap-2">
      <h4 className="text-2xl font-semibold">Brand</h4>
      <select
        data-name="brand"
        value={filters.brand}
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
