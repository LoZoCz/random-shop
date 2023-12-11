import express from "express";
import axios from "axios";
import cors from "cors";

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

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
