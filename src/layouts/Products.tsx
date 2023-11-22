import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import ProductsMainCont from "../components/products/ProductsMainCont";

const Products = () => {
  const { categoryParam } = useParams();

  return (
    <>
      <Header />
      <ProductsMainCont selectedCategory={categoryParam} />
    </>
  );
};

export default Products;
