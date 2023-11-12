import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { productTypes } from "../utils/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ItemWrapper = () => {
  const { id } = useParams();
  const [item, setItem] = useState({} as productTypes);
  const [thumbnailImg, setThumbnailImg] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((response) => {
        setItem(response.data);
        setThumbnailImg(response.data.thumbnail);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, [id]);

  return (
    <section
      className="grid grid-cols-2 place-items-center gap-6 px-40 py-16"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div
        className="grid place-items-center gap-6"
        style={{ gridTemplateRows: "3fr 1fr" }}
      >
        <img
          src={thumbnailImg}
          alt={`${item?.title} image`}
          className="rounded-md"
          style={{ height: "30rem" }}
        />
        <div
          className={`grid gap-8`}
          style={{
            gridTemplateColumns: `repeat(${
              item?.images && item?.images.length + 1
            }, 8rem)`,
            gridTemplateRows: "8rem",
          }}
        >
          <img
            src={item?.thumbnail}
            alt={`${item?.title} image`}
            className="w-full h-full object-cover cursor-pointer rounded-md"
            onClick={() => setThumbnailImg(item?.thumbnail)}
          />
          {item?.images &&
            item?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${item?.title} image`}
                className="w-full h-full object-cover cursor-pointer rounded-md"
                onClick={() => setThumbnailImg(image)}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 data-name="item-title" className="text-6xl font-semibold">
          {item?.title}
        </h1>
        <p data-name="item-brand" className="text-md">
          {item?.brand}
        </p>
        <p
          data-name="item-desc"
          className="text-2xl pt-6"
          style={{ width: "40ch" }}
        >
          {item?.description}
        </p>
        <p data-name="item-price" className="text-6xl font-semibold">
          {item?.price} €
        </p>
        <div className="flex justify-between items-center pt-8">
          <p data-name="item-rating" className="text-xl">
            <FontAwesomeIcon
              data-name="raiting-filter-btn"
              icon={faStar}
              className="text-md text-yellow-400"
            />{" "}
            {item?.rating}
          </p>
          <p data-name="item-stock" className="text-xl">
            {item?.stock} stocks
          </p>
        </div>
        <button
          data-name="add-to-cart-btn"
          className="bg-sky-400 text-white px-12 py-2 font-semibold self-start rounded-md hover:bg-pink-500 transition-colors duration-300"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ItemWrapper;
