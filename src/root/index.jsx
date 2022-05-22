import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
// import { Container } from "./styles";

export const Root = () => {
  return (
    <Routes>
       {/* {navbar.map(({ path, Element, id, hidden }) => {
          return hidden && <Route key={id} path={path} element={Element} />;
        })} */}
      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })}
        <Route path="/" element={<Navigate to={'/home'} />} />
      </Route>
      <Route path="*" element={<div>Page Not Found...</div>} />
    </Routes>
  );
};
