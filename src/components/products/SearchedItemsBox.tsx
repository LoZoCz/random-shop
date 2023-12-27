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
  return (
    <section
      className="grid gap-8 px-40 py-16"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <h1 className="text-4xl font-bold">
        Searched items for "<span className="italic">{query}</span>",{" "}
        {searchedItems.length}{" "}
        {searchedItems.length === 1 ? "result" : "results"}
      </h1>
      <div
        className={`grid grid-cols-${searchedItems.length ? 5 : 1} gap-6 ${
          searchedItems.length === 0 ? "h-96 place-items-center" : "h-full"
        }`}
        style={{
          gridTemplateRows: `repeat(${
            searchedItems.length === 0
              ? 1
              : Math.round(searchedItems.length / 5)
          }, 30rem)`,
        }}
      >
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
