import { createContext, useState, ReactNode, useEffect } from "react";
import {
  UserDataTypes,
  UserCartTypes,
  AuthContextProps,
  defaultUser,
  defaultUserCart,
  productTypes,
} from "../utils/siteData";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDataTypes>(defaultUser);
  const [userCart, setUserCart] = useState<UserCartTypes[]>([defaultUserCart]);

  const login = (userData: UserDataTypes, userCartData: UserCartTypes[]) => {
    setUser(userData);
    setUserCart(userCartData);
  };

  const logout = () => {
    setUser(defaultUser);
    localStorage.removeItem("userToken");
  };

  const updateUser = (newData: UserDataTypes) => {
    setUser(newData);
  };

  const convertApiProductToCartType = (
    apiProduct: productTypes,
  ): UserCartTypes => {
    return {
      discountPercentage: apiProduct.discountPercentage,
      discountedPrice:
        apiProduct.price * (1 - apiProduct.discountPercentage / 100),
      id: apiProduct.id,
      price: apiProduct.price,
      quantity: 1,
      thumbnail: apiProduct.thumbnail,
      title: apiProduct.title,
      total: apiProduct.price * (1 - apiProduct.discountPercentage / 100),
    };
  };

  const updateUserCart = (newItem: productTypes) => {
    const convertedItem = convertApiProductToCartType(newItem);
    const existingItem = userCart.find((item) => item.id === convertedItem.id);

    if (existingItem) {
      setUserCart((prev) =>
        prev.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setUserCart((prev) => [...prev, convertedItem]);
    }
  };

  const updateUserCartQuantity = (productId: number, newQuantity: number) => {
    setUserCart((prevCart) => {
      const updatedCart = [...prevCart];

      const index = updatedCart.findIndex((item) => item.id === productId);

      if (index !== -1) {
        const updatedQuantity = Math.max(newQuantity, 0);

        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedQuantity,
        };
      }

      return updatedCart;
    });
  };

  const deleteItemFromCart = (productId: number) => {
    setUserCart((prevCart) => {
      const updatedCart = [...prevCart];

      const newCart = updatedCart.filter((item) => item.id !== productId);

      return newCart;
    });
  };

  const [scrWidth, setScrWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (scrWidth !== newWidth) {
        setScrWidth(newWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrWidth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userCart,
        login,
        logout,
        updateUser,
        updateUserCart,
        updateUserCartQuantity,
        deleteItemFromCart,
        scrWidth,
        setScrWidth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
