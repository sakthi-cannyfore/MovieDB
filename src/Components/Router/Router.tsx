import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Path from "../Path";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>

      <Route path="/home" element={<Footer />} />
      <Route path="/test" element={<Path />} />
    </Routes>
  )
);

export default Router;
