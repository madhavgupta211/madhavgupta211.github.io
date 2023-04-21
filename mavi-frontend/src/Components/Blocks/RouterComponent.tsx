import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponent";

export type RouterPropsT = {
  userData: any;
};

const Router = (props: RouterPropsT): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
