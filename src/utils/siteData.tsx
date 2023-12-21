import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faTruckFast,
  faHandshake,
  faMedal,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import mockData from "../utils/mockData.json";
import { useContext } from "react";
import { AuthContext } from "../layouts/AuthProvider";

export const headerIcons = [
  {
    name: "search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />,
  },
  {
    name: "profile",
    icon: <FontAwesomeIcon icon={faUser} className="text-2xl" />,
  },
  {
    name: "cart",
    icon: <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />,
  },
  {
    name: "login",
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} className="text-2xl" />,
  },
  {
    name: "logout",
    icon: (
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl" />
    ),
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

export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPasswordValid = (password: string) => {
  return password.length > 8;
};

export const isUsernameValid = (username: string) => {
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  return usernameRegex.test(username) && username.length >= 6;
};

export const isPasswordsMatch = (password: string, passwordAuth: string) => {
  return password.trim() === passwordAuth.trim();
};

export type ErrorTypes = {
  errorType: string;
  errorState: boolean;
  errorMsg: string;
};

export type RegisterUserDataType = {
  mail: string;
  username: string;
  password: string;
  passwordAuth: string;
};

export const mockLogedUserData = {
  id: 15,
  username: "kminchelle",
  email: "kminchelle@qq.com",
  firstName: "Jeanne",
  lastName: "Halvorson",
  gender: "female",
  image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
};

export const mockUserOrders = [
  {
    id: 1,
    title: "Samsung A54S",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/pl/feature/163974357/pl-feature-minimalist-design-with-striking-style-531663337?$FB_TYPE_B_JPG$",
  },
  {
    id: 2,
    title: "MacBook Air",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
  },
  {
    id: 3,
    title: "Nike T-shirt",
    image:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2Fcf%2Fddcfe4e1b1313da86b059e70a1422ec4927aece3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  },
  {
    id: 4,
    title: "Nike Airforce",
    image: "https://grailpoint.com/wp-content/uploads/2020/06/af1supblacck.jpg",
  },
];

export type UserDataTypes = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export type UserCartTypes = {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
};

export type AuthContextProps = {
  user: UserDataTypes;
  userCart: UserCartTypes[];
  login: (userData: UserDataTypes, userCartData: UserCartTypes[]) => void;
  logout: () => void;
  updateUser: (newData: UserDataTypes) => void;
  updateUserCart: (newItem: productTypes) => void;
  updateUserCartQuantity: (productId: number, newQuantity: number) => void;
  deleteItemFromCart: (productId: number) => void;
};

export const useUserContext = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useUserContext must be use with a AuthContext");
  }

  return context;
};

export const defaultUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  token: "",
};

export const defaultUserCart = {
  discountPercentage: 0,
  discountedPrice: 0,
  id: 0,
  price: 0,
  quantity: 0,
  thumbnail: "",
  title: "",
  total: 0,
};
