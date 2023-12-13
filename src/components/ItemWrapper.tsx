import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { productTypes } from "../utils/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ItemWrapper = () => {
  const { id } = useParams();
  const [item, setItem] = useState({} as productTypes);
  const [imageIndex, setImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((response) => {
        setItem(response.data);
        setAllImages(() => {
          const arr = [response.data.thumbnail, ...response.data.images];
          return arr;
        });
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, [id]);

  const handleImageChange = () => {
    if (imageIndex === allImages.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <section
      className="grid place-items-center grid-cols-2 gap-6 px-32 py-16"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div className="flex justify-center items-center relative">
        <img
          src={allImages[imageIndex]}
          alt={`${item?.title} image`}
          className="rounded-md max-h-[30rem] object-cover shadow-md"
          height={450}
          width={800}
        />
        <button
          onClick={handleImageChange}
          className="bg-sky-400 text-white w-12 aspect-square rounded-full absolute top-1/2 -translate-y-1/2 -left-[4rem]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={handleImageChange}
          className="bg-sky-400 text-white w-12 aspect-square rounded-full absolute top-1/2 -translate-y-1/2 -right-[4rem]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
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
