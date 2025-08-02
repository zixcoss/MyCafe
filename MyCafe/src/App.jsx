import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import OnHospitality from "./pages/OnHospitality";
import MenuLayout from "./layouts/MenuLayout";
import Food from "./pages/Food";
import Drink from "./pages/Drink";
import Dessert from "./pages/Dessert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<MenuLayout />}>
            <Route index element={<Navigate to="food" replace />} />
            <Route path="food" element={<Food />} />
            <Route path="drink" element={<Drink />} />
            <Route path="dessert" element={<Dessert />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="hospitality" element={<OnHospitality />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="cs" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
