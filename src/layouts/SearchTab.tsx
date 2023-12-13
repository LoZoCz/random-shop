import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import { productTypes } from "../utils/siteData";

import SearchedItemsBox from "../components/SearchedItemsBox";

const SearchTab = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const [searchedItems, setSearchedItems] = useState<productTypes[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/search?q=${query}`).then((response) => {
      setSearchedItems(response.data.products);
    });
  }, [query]);

  return (
    <>
      <Header />
      <SearchedItemsBox query={query} searchedItems={searchedItems} />
    </>
  );
};

export default SearchTab;
