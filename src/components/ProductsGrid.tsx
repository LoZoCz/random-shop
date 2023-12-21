import ProductBox from "./ProductBox";
import { dataTypes } from "../utils/siteData";
import NoResult from "./NoResult";

type ProductsGridProps = {
  prodData: dataTypes;
};

const ProductsGrid = ({ prodData }: ProductsGridProps) => {
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
      {prodData.products.length ? (
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
