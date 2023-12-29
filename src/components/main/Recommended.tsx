import ProductBox from "../products/ProductBox";
import { useState, useEffect } from "react";
import { productTypes, useUserContext } from "../../utils/siteData";
import axios from "axios";
import ProductSkeletonLoading from "../loadingElements/ProductSkeletonLoading";

const Recommended = () => {
  const [recommended, setRecommended] = useState<productTypes[] | undefined>();
  const { scrWidth } = useUserContext();

  useEffect(() => {
    axios
      .get("http://localhost:5000/home/recommended")
      .then((response) => {
        setRecommended(response.data.products);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, []);

  const isCentered = scrWidth < 1650 ? "justify-start" : "justify-center";
  const isScrollable = scrWidth < 1650 ? "overflow-x-scroll" : "";

  return (
    <section className="grid" style={{ gridTemplateRows: "auto 1fr" }}>
      <h1 className="text-4xl font-bold my-8">Recommended items</h1>
      <div
        className={`grid gap-12 recommendedBox ${isScrollable} ${isCentered}`}
      >
        {recommended !== undefined
          ? recommended.map((product, i) => (
              <ProductBox key={i} product={product} />
            ))
          : Array.from({ length: 5 }).map((_, i) => (
              <ProductSkeletonLoading key={i} />
            ))}
      </div>
    </section>
  );
};

export default Recommended;
