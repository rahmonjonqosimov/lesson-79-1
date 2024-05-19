import React, { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../redux/heartSlice";
import { FaHeart } from "react-icons/fa6";

const Product = ({ data, isLoading, title }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.heart.value);
  const navigate = useNavigate();
  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="image">
        <div onClick={() => dispatch(toggleHeart(el))} className="circle">
          {wishes?.some((item) => el.id === item.id) ? (
            <FaHeart style={{ color: "red" }} className="heart" />
          ) : (
            <FaRegHeart className="heart" />
          )}
        </div>
        <img
          onClick={() => navigate(`/product/${el.id}`)}
          src={el.images[0]}
          alt={el.title}
        />
        <button className="card__btn">Add To Card</button>
      </div>
      <h5>{el.title}</h5>
      <span>
        <h6>$ {el.price}</h6>
        <p>( {el.rating} )</p>
      </span>
    </div>
  ));
  return (
    <section style={{ margin: "30px 0" }} className="products">
      <div className="container">
        <div className="title">
          <div className="circle"></div>
          <h5>{title}</h5>
        </div>
        <div className="wrapper">{card}</div>
        <button className="btn">{isLoading ? "Loading..." : "See More"}</button>
      </div>
    </section>
  );
};

export default Product;
