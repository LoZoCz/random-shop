import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { filtersBody } from "../utils/siteData";

type RateFilterProps = {
  filters: filtersBody;
  setFilters: React.Dispatch<React.SetStateAction<filtersBody>>;
};

const RateFilter = ({ filters, setFilters }: RateFilterProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <button
          key={i}
          className={`${
            filters.rating && filters.rating >= i + 1
              ? "text-yellow-400"
              : "text-slate-600"
          } transition-all`}
          onClick={() => {
            // Dodaj walidację, aby rating zawsze był większy lub równy 1
            const newRating = Math.max(i + 1, 1);
            setFilters({ ...filters, rating: newRating });
          }}
        >
          <FontAwesomeIcon
            data-name="raiting-filter-btn"
            icon={faStar}
            className="text-2xl"
          />
        </button>,
      );
    }
    return stars;
  };

  return (
    <div data-name="raiting-filter" className="flex flex-col gap-2">
      <h4 className="text-2xl font-semibold">Raiting</h4>
      <div className="flex gap-2">{renderStars()}</div>
    </div>
  );
};

export default RateFilter;
