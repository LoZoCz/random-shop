import ProductBox from "./ProductBox";
import NoResult from "../loadingElements/NoResult";
import { productTypes } from "../../utils/siteData";
import Loader from "../loadingElements/Loader";

type SearchedItemsBoxProps = {
  query: string | null;
  searchedItems: productTypes[];
  loading: boolean;
  dataLoaded: boolean;
};

const SearchedItemsBox = ({
  query,
  searchedItems,
  loading,
  dataLoaded,
}: SearchedItemsBoxProps) => {
  const columns =
    searchedItems.length <= 100 && searchedItems.length > 0
      ? "grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
      : "grid-cols-1";

  const isNotFound =
    searchedItems.length === 0 ? "h-96 place-items-center" : "h-full";

  const classes = `grid gap-6 ${columns} ${isNotFound}`;

  return (
    <section
      className="grid gap-8 px-4 py-16 2xl:px-40 md:px-16"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <h1 className="text-4xl font-bold">
        Searched items for "<span className="italic">{query}</span>",{" "}
        {searchedItems.length}{" "}
        {searchedItems.length === 1 ? "result" : "results"}
      </h1>
      <div className={classes}>
        {loading && !dataLoaded ? (
          <Loader />
        ) : searchedItems.length > 0 ? (
          searchedItems.map((product, i) => (
            <ProductBox key={i} product={product} />
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </section>
  );
};

export default SearchedItemsBox;
