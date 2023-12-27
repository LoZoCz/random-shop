import CategoryBox from "./CategoryBox";
import { useState, useEffect } from "react";
import axios from "axios";
import CategorySkeletonLoading from "../loadingElements/CategorySkeletonLoading";
import { useUserContext } from "../../utils/siteData";

const ProductFilters = () => {
  const { scrWidth } = useUserContext();
  const [categories, setCategories] = useState<string[]>([]);

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

  const filteredCategories =
    scrWidth < 900 ? categories.slice(0, 6) : categories.slice(0, 8);

  const classes = `grid gap-8 items-center ${
    scrWidth < 900 ? "grid-cols-3" : "grid-cols-4"
  }`;

  return (
    <section className={classes}>
      {categories.length !== 0
        ? filteredCategories.map((category, i) => {
            return <CategoryBox key={i} category={category} />;
          })
        : Array.from({ length: 8 }).map((_, i) => (
            <CategorySkeletonLoading key={i} />
          ))}
    </section>
  );
};

export default ProductFilters;
