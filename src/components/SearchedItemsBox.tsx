import ProductBox from "../components/ProductBox";
import NoResult from "../components/NoResult";
import { productTypes } from "../utils/siteData";

type SearchedItemsBoxProps = {
  query: string | null;
  searchedItems: productTypes[];
};

const SearchedItemsBox = ({ query, searchedItems }: SearchedItemsBoxProps) => {
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
        data-name="serached-box"
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
        {searchedItems.length ? (
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
