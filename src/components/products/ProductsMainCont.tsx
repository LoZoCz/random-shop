import FilterNavbar from "../filters/FilterNavbar";
import ProductsGrid from "./ProductsGrid";
import { useState, useEffect } from "react";
import { filtersBody, productTypes, dataTypes } from "../../utils/siteData";
import axios from "axios";

type ProductsMainGridProps = {
  selectedCategory?: string;
};

const ProductsMainGrid = ({ selectedCategory }: ProductsMainGridProps) => {
  const [filters, setFilters] = useState<filtersBody>({
    brand: "",
    stock: "",
    price: "",
    rating: 1,
  });

  const [productsData, setProductsData] = useState<dataTypes>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const filterFunction = (prod: dataTypes) => {
      const filtered = prod.products.filter((product: productTypes) => {
        return (
          (filters.brand === "" || product.brand === filters.brand) &&
          (filters.price === "" || product.price <= Number(filters.price)) &&
          (filters.stock === "" || product.stock >= Number(filters.stock)) &&
          (!filters.rating || product.rating >= filters.rating)
        );
      });

      return {
        products: filtered,
        total: filtered.length,
        skip: 0,
        limit: filtered.length,
      };
    };

    let apiUrl = "http://localhost:5000/products";

    if (selectedCategory) {
      apiUrl = `http://localhost:5000/products/category/${selectedCategory}`;
    }

    setLoading(true);

    axios
      .get(apiUrl)
      .then((response) => {
        const filteredData = filterFunction(response.data);
        setProductsData(filteredData);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    filters.brand,
    filters.price,
    filters.rating,
    filters.stock,
    selectedCategory,
  ]);

  return (
    <section
      className="grid gap-8 px-4 py-16 2xl:px-40 md:px-16"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <FilterNavbar filters={filters} setFilters={setFilters} />
      <ProductsGrid
        prodData={productsData}
        loading={loading}
        dataLoaded={dataLoaded}
      />
    </section>
  );
};

export default ProductsMainGrid;
