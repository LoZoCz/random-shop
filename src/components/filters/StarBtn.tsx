import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarBtn = () => {
  return (
    <button>
      <FontAwesomeIcon
        data-name="raiting-filter-btn"
        icon={faStar}
        className="text-2xl"
      />
    </button>
  );
};

export default StarBtn;
