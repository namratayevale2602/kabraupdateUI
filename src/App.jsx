import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact/Contact";
import Categorydetail from "./pages/Categorydetail/Categorydetail";
import OccasionCategory from "./pages/Home/OccasionsCategory";
import OccasionCategoryDetail from "./pages/OccasionDetail/OccasionCategoryDetail";
import About from "./pages/aboutus/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="Categorydetail/:slug" element={<Categorydetail />} />
        {/* <Route path="occasion/:slug" element={<OccasionCategory />} /> */}
        <Route path="occasion" element={<OccasionCategory />} />
        <Route path="occasion/:slug" element={<OccasionCategoryDetail />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
