import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import Navbar from "./component/navbar/Navbar";
import "./sass/main.scss";
import SingleRoute from "./router/single-route/SingleRoute";
import Wishes from "./router/wishes/Wishes";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route
          path={"*"}
          element={
            <img
              src="https://habibza.in/wp-content/uploads/2021/08/404.png"
              style={{ width: "100%" }}
            />
          }
        />
        <Route path="/product/:id" element={<SingleRoute />} />
      </Routes>
    </>
  );
};

export default App;
