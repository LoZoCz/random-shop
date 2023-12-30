import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/siteData";

type CategoryBoxProps = {
  category: string;
};

const CategoryBox = ({ category }: CategoryBoxProps) => {
  const imageUrl = getImageUrl(`${category}.svg`);

  return (
    <Link
      to={`/random-shop/categories/${category}`}
      className="category-link aspect-video grid place-items-center rounded-md relative"
      key={category}
    >
      <img
        src={imageUrl}
        alt="filter-image"
        className="w-3/4 aspect-video rounded-lg drop-shadow-xl"
      />
      <h3 className="text-3xl font-medium text-slate-900 capitalize drop-shadow-xl text-center">
        {category.replace("-", " ")}
      </h3>
    </Link>
  );
};

export default CategoryBox;
