import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faTruckFast,
  faHandshake,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import mockData from "../utils/mockData.json";

export const headerIcons = [
  {
    name: "search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />,
  },
  {
    name: "user",
    icon: <FontAwesomeIcon icon={faUser} className="text-2xl" />,
  },
  {
    name: "cart",
    icon: <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />,
  },
];

export const siteInfo = [
  {
    dataName: "Delivery",
    title: "Fast Delivery",
    paragraph:
      "Our products are delivered at lightning speed. Thanks to our efficient logistics process, you can enjoy your purchases in no time.",
    icon: <FontAwesomeIcon icon={faTruckFast} className="text-5xl" />,
  },
  {
    dataName: "Support",
    title: "Secure Deliveries",
    paragraph:
      "Your order is our priority. That's why we make every effort to deliver it in pristine condition. Your products are carefully packaged and secured to arrive at your doorstep in perfect shape..",
    icon: <FontAwesomeIcon icon={faHandshake} className="text-5xl" />,
  },
  {
    dataName: "Security",
    title: "Customer Support",
    paragraph:
      "Our friendly and knowledgeable customer support is always ready to assist. If you have questions, concerns, or need assistance, get in touch with us. We're here to help!",
    icon: <FontAwesomeIcon icon={faMedal} className="text-5xl" />,
  },
];

export type filtersBody = {
  brand?: string;
  price?: string;
  stock?: string;
  rating?: number;
};

export type productTypes = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type dataTypes = {
  products: productTypes[];
  total: number;
  skip: number;
  limit: number;
};

export const uniqueBrands = [
  ...new Set(mockData.products.map((product) => product.brand)),
];
