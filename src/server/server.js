import express from "express";
import axios from "axios";
import cors from "cors";
import { body, validationResult } from "express-validator";

const port = 5000;

const app = express();

// app.use(express.static("src"));

app.use(cors());

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

app.post(
  "/user/add",
  [
    body("mail").isEmail(),
    body("username")
      .isLength({ min: 3 })
      .matches(/^[a-zA-Z0-9_]+$/),
    body("password").isLength({ min: 8 }),
    body("passwordAuth").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password do not match");
      }
      return true;
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { mail, username, password } = req.body;

    try {
      const response = await axios.post("https://dummyjson.com/auth/register", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          email: mail,
        }),
      });

      res.json({
        success: true,
        message: "User added successfully.",
        user: response.data,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
);

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
