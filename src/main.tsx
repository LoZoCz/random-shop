import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Layouts from "./layouts/import";
import { AuthProvider } from "./layouts/AuthProvider";

ReactDOM.createRoot(document.getElementById("main-cont")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/random-shop/" element={<Layouts.Home />} />
          <Route
            path="/random-shop/categories"
            element={<Layouts.Categories />}
          />
          <Route
            path="/random-shop/categories/:categoryParam"
            element={<Layouts.Products />}
          />
          <Route path="/random-shop/products" element={<Layouts.Products />} />
          <Route
            path="/random-shop/product/:id"
            element={<Layouts.ItemView />}
          />
          <Route path="/random-shop/search" element={<Layouts.SearchTab />} />
          <Route path="/random-shop/login" element={<Layouts.Login />} />
          <Route path="/random-shop/register" element={<Layouts.Register />} />
          <Route element={<Layouts.ProtectedRoutes />}>
            <Route path="/random-shop/user" element={<Layouts.UserTab />} />
            <Route path="/random-shop/cart" element={<Layouts.UserCart />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
);
