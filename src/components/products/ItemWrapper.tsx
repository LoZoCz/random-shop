import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { productTypes, useUserContext } from "../../utils/siteData";
import ItemWrapperSkeletoLoading from "../loadingElements/ItemWrapperSkeletoLoading";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductInformation from "./ProductInformation";

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
          const arr = [...response.data.images];
          return arr;
        });
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  }, [id]);

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
    <section className="productView">
      <ProductImageCarousel
        title={item?.title}
        allImages={allImages}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      <ProductInformation click={handleClick} item={item} />
    </section>
  );
};

export default ItemWrapper;
