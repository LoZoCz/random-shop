import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";

const port = 5000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/categories", async (req, res) => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/categories",
    );

    const categories = response.data;

    res.json(categories);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd pobierania danych" });
  }
});

app.get("/home/recommended", async (req, res) => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=5&skip=4",
    );

    const products = response.data;

    res.json(products);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd pobierania danych" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100",
    );

    const products = response.data;

    res.json(products);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd pobierania danych" });
  }
});

app.get("/search", async (req, res) => {
  try {
    const itemName = req.query.q;

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${itemName}`,
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Wystąpił błąd podczas przetwarzania zapytania." });
  }
});

app.get("/products/category/:categoryParam", async (req, res) => {
  try {
    const categoryName = req.params.categoryParam;

    const response = await axios.get(
      `https://dummyjson.com/products/category/${categoryName}`,
    );

    const products = response.data;

    res.json(products);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd pobierania danych" });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const response = await axios.get(
      `https://dummyjson.com/products/${itemId}`,
    );

    const products = response.data;

    res.json(products);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd pobierania danych" });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  axios
    .get(`https://dummyjson.com/users/search?q=${username}`)
    .then((response) => {
      const searchedUser = response.data.users[0];

      const isUserLogged =
        searchedUser.username === username &&
        searchedUser.password === password;

      if (isUserLogged) {
        axios
          .post("https://dummyjson.com/auth/login", {
            username: username,
            password: password,
          })
          .then((userDataRes) => {
            axios
              .get(`https://dummyjson.com/carts/user/${searchedUser.id}`)
              .then((userCartRes) => {
                const userCarts = userCartRes.data.carts;

                if (userCarts && userCarts.length > 0) {
                  res.status(200).json({
                    userData: userDataRes.data,
                    userCart: userCarts[0].products,
                  });
                } else {
                  res.status(200).json({
                    userData: userDataRes.data,
                    userCart: [],
                  });
                }
              });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Wystąpił błąd podczas logowania" });
          });
      } else {
        res.status(401).json({ error: "Niepoprawne dane logowania" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Wystąpił błąd podczas logowania" });
    });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
