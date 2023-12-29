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
  const columns =
    prodData.products.length <= 100 && prodData.products.length > 0
      ? "grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
      : "grid-cols-1";

  const isNotFound =
    prodData.products.length === 0 ? "h-96 place-items-center" : "h-full";

  const classes = `grid gap-6 ${columns} ${isNotFound}`;
  return (
    <div className={classes}>
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
