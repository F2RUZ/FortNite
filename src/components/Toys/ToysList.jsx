import React from "react";
import ToysItem from "../ToysItem/ToysItem";
import "./toysList.scss";
import { ToastContainer } from "react-toastify";

const ToysList = ({ toys, addCart }) => {
  return (
    <div className="ToysList">
      <ToastContainer />
      {toys.map((item, i) => (
        <ToysItem addCart={addCart} key={i} {...item} />
      ))}
    </div>
  );
};

export default ToysList;
