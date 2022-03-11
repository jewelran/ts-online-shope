import React from "react";
import Home from './../Home/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Main = () => {
  return <div className="container mx-auto">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  </div>;
};

export default Main;
