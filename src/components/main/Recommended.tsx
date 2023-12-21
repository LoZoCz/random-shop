import ProductBox from "../ProductBox";
import { useState, useEffect } from "react";
import { productTypes } from "../../utils/siteData";
import axios from "axios";

const Recommended = () => {
  const [recommended, setRecommended] = useState<productTypes[] | undefined>();

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

  return (
    <section className="grid" style={{ gridTemplateRows: "auto 1fr" }}>
      <h1 className="text-4xl font-bold my-8">Recommended items</h1>
      <div
        className="grid grid-cols-5 gap-12"
        style={{ gridTemplateRows: "28rem" }}
      >
        {recommended !== undefined ? (
          recommended.map((product, i) => (
            <ProductBox key={i} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Recommended;
