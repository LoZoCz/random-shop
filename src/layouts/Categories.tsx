import Header from "../components/header/Header";
import CategoryBox from "../components/main/CategoryBox";
import { useState, useEffect } from "react";
import axios from "axios";
import CategorySkeletonLoading from "../components/loadingElements/CategorySkeletonLoading";

const Categories = () => {
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

  return (
    <>
      <Header />
      <section
        data-name="categories-section"
        className="grid grid-cols-4 gap-8 px-40 py-16"
      >
        {categories.length === 0
          ? Array.from({ length: 20 }).map((_, i) => {
              return <CategorySkeletonLoading key={i} />;
            })
          : categories.map((category: string, i: number) => {
              return <CategoryBox key={i} category={category} />;
            })}
      </section>
    </>
  );
};

export default Categories;
