import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation/Navigation";
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const ItemDetailsPage = lazy(() =>
  import("../pages/ItemDetailsPage/ItemDetailsPage")
);
const Features = lazy(() => import("../components/Features/Features"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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
