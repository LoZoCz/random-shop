import { filtersBody } from "../../utils/siteData";

type StockfFilterProps = {
  filters: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};

const StockfFilter = ({ filters, setFilters }: StockfFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl font-semibold">Number of stocks</h4>
      <div>
        <input
          type="number"
          name="stock-inp"
          className="outline-none rounded-sm"
          value={filters.stock}
          onChange={(e) => setFilters({ ...filters, stock: e.target.value })}
        />
      </div>
    </div>
  );
};

export default StockfFilter;
