import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { productTypes, useUserContext } from "../../utils/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ItemWrapperSkeletoLoading from "../loadingElements/ItemWrapperSkeletoLoading";

const ItemWrapper = () => {
  const { id } = useParams();
  const [item, setItem] = useState({} as productTypes);
  const [imageIndex, setImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);
  const { updateUserCart } = useUserContext();

  const isLogged = localStorage.getItem("userToken");
  const navigate = useNavigate();

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

  const handleClick = (e: React.FormEvent, newItem: productTypes) => {
    e.preventDefault();

    if (!isLogged) {
      navigate("/random-shop/login");
    } else {
      updateUserCart(newItem);
    }
  };

  if (!Object.keys(item).length) {
    return <ItemWrapperSkeletoLoading />;
  }

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
        <h1 className="text-6xl font-semibold">{item?.title}</h1>
        <p className="text-md">{item?.brand}</p>
        <p className="text-2xl pt-6" style={{ width: "40ch" }}>
          {item?.description}
        </p>
        <p className="text-6xl font-semibold">{item?.price} €</p>
        <div className="flex justify-between items-center pt-8">
          <p className="text-xl">
            <FontAwesomeIcon
              icon={faStar}
              className="text-md text-yellow-400"
            />{" "}
            {item?.rating}
          </p>
          <p className="text-xl">{item?.stock} stocks</p>
        </div>
        <button onClick={(e) => handleClick(e, item)} className="add-cart-btn">
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ItemWrapper;
