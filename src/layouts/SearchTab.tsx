import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import { productTypes } from "../utils/siteData";

import SearchedItemsBox from "../components/products/SearchedItemsBox";

const SearchTab = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const [searchedItems, setSearchedItems] = useState<productTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/search?q=${query}`)
      .then((response) => {
        setSearchedItems(response.data.products);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <Header />
      <SearchedItemsBox
        query={query}
        searchedItems={searchedItems}
        loading={loading}
        dataLoaded={dataLoaded}
      />
    </>
  );
};

export default SearchTab;
