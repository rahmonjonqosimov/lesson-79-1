import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../component/cart/Cart";

const ProductCart = () => {
  let data = useSelector((s) => s.cart.value);

  return (
    <>
      <Cart data={data} />
    </>
  );
};

export default ProductCart;
