import ProductBox from "./ProductBox";
import { dataTypes } from "../../utils/siteData";
import NoResult from "../loadingElements/NoResult";
import Loader from "../loadingElements/Loader";

type ProductsGridProps = {
  prodData: dataTypes;
  loading: boolean;
  dataLoaded: boolean;
};

const ProductsGrid = ({ prodData, loading, dataLoaded }: ProductsGridProps) => {
  return (
    <div
      className={`grid grid-cols-${prodData.products.length ? 5 : 1} gap-6 ${
        prodData.products.length === 0 ? "h-96 place-items-center" : "h-full"
      }`}
      style={{
        gridTemplateRows: `repeat(${
          prodData.products.length === 0
            ? 1
            : Math.round(prodData.products.length / 5)
        }, 30rem)`,
      }}
    >
      {loading && !dataLoaded ? (
        <Loader />
      ) : prodData.products.length > 0 ? (
        prodData.products.map((product, i) => (
          <ProductBox key={i} product={product} />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default ProductsGrid;
