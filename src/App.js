import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Foods } from "./pages/Foods";
import { Home } from "./pages/Home";
import { Ingredients } from "./pages/Ingredients";
import { LocalCulinary } from "./pages/LocalCulinary";
import { Meals } from "./pages/Meals";
import { MealsDetail } from "./pages/MealsDetail";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-8">
        <div className="w-11/12 md:w-4/6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/foods/:name" element={<Meals />} />
            <Route path="/foods/:name/:id" element={<MealsDetail />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/local" element={<LocalCulinary />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
