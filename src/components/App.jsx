import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation/Navigation";
import HomePage from "./../pages/HomePage/HomePage";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import Loader from "./Loader/Loader";
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const ItemDetailsPage = lazy(() =>
  import("../pages/ItemDetailsPage/ItemDetailsPage")
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ItemDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
