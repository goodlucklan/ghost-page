import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Navbar />
      </div>
    </BrowserRouter>
  );
};
