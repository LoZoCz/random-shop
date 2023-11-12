import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductsMainCont from "../components/ProductsMainCont";

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
