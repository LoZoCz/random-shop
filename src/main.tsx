import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Layouts from "./layouts/import";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layouts.Home />} />
        <Route path="/categories" element={<Layouts.Categories />} />
        <Route
          path="/categories/:categoryParam"
          element={<Layouts.Products />}
        />
        <Route path="/products" element={<Layouts.Products />} />
        <Route path="/product/:id" element={<Layouts.ItemView />} />
        <Route path="/search" element={<Layouts.SearchTab />} />
        <Route path="/login" element={<Layouts.Login />} />
        <Route path="/register" element={<Layouts.Register />} />
        <Route element={<Layouts.ProtectedRoutes />}>
          <Route path="/user" element={<Layouts.UserTab />} />
          <Route path="/cart" />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
