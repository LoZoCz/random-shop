import { filtersBody } from "../../utils/siteData";

type PriceFilterProps = {
  filters?: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};

const PriceFilter = ({ filters, setFilters }: PriceFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl font-semibold">Price (€)</h4>
      <div>
        <input
          type="number"
          className="outline-none rounded-sm"
          value={filters?.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
