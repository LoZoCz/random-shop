import CategoryBox from "./CategoryBox";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductFilters = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, []);

  const filteredCategories = categories.filter((_, i) => i < 8);

  return (
    <section
      data-name="category-filter"
      className="grid grid-cols-4 gap-8 items-center"
    >
      {filteredCategories.map((category, i) => {
        return <CategoryBox key={i} category={category} />;
      })}
    </section>
  );
};

export default ProductFilters;
