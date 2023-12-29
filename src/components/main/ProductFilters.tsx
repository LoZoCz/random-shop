import CategoryBox from "./CategoryBox";
import { useState, useEffect } from "react";
import axios from "axios";
import CategorySkeletonLoading from "../loadingElements/CategorySkeletonLoading";
import { useUserContext } from "../../utils/siteData";

const ProductFilters = () => {
  const { scrWidth } = useUserContext();
  const [categories, setCategories] = useState<string[]>([]);

  const isThin =
    scrWidth < 400
      ? categories.filter((_, i) => i < 4)
      : categories.filter((_, i) => i < 8);

  const columns =
    scrWidth < 400
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  const classes = `grid gap-2 items-center sm:gap-8 ${columns}`;

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data.slice(0, 8));
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, []);

  return (
    <section className={classes}>
      {categories.length !== 0
        ? isThin.map((category, i) => {
            return <CategoryBox key={i} category={category} />;
          })
        : Array.from({ length: 8 }).map((_, i) => (
            <CategorySkeletonLoading key={i} />
          ))}
    </section>
  );
};

export default ProductFilters;
