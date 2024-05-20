import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../redux/cartSlice";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
const Cart = () => {
  let data = useSelector((s) => s.cart.value);
  let dispatch = useDispatch();
  const [cupon, setCupon] = useState("");
  const [totalCupon, setTotalCupon] = useState(0);
  let total = data?.reduce(
    (acc, el) => acc + Math.round(el.price) * el.soni,
    0
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cupon === "cupon") {
      setTotalCupon(total * 0.9);
      toast.success("10% chegirma berildi");
    } else {
      toast.warning("Bunday kupon mavjud emas !");
    }
  };
  return (
    <>
      <div className="container cart">
        {data.length ? (
          <div className="cart__content">
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el) => (
                  <tr className="cart__item" key={el.id}>
                    <td>
                      <img src={el?.images[0]} alt={el.title} />
                      <h4 className="title" title={el?.title}>
                        {el?.title}
                      </h4>
                    </td>
                    <td className="price"> $ {Math.round(el?.price)}</td>
                    <td className="qny">
                      <button
                        disabled={el.soni <= 1}
                        onClick={() => dispatch(decrementCartQuantity(el))}
                      >
                        -
                      </button>
                      <span>{el.soni}</span>
                      <button
                        disabled={el.soni >= 10}
                        onClick={() => dispatch(incrementCartQuantity(el))}
                      >
                        +
                      </button>
                    </td>
                    <td className="total">
                      $ {Math.round(el?.price) * el?.soni}
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => dispatch(removeItemFromCart(el))}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart__total">
              <h4 className="title">Cart Totals</h4>
              <p>Coupon Apply</p>
              <form onSubmit={handleSubmit}>
                <input
                  value={cupon}
                  onChange={(e) => setCupon(e.target.value)}
                  placeholder="Enter coupon code here..."
                  type="text"
                  required
                />
                <button>Apply</button>
              </form>
              <div>
                <p>Subtotal</p>
                <span>$ {total.toFixed(2)}</span>
              </div>
              <div>
                <p>Coupon Discount</p>
                <span>(-) 00.00</span>
              </div>
              <div>
                <p>Shiping</p>
                <span>$16.00</span>
              </div>
              <div className="total">
                <h4>Total</h4>
                <span>$ {totalCupon || total.toFixed(2)}</span>
              </div>
              <button className="check">Proceed To Checkout</button>
            </div>
          </div>
        ) : (
          <div
            style={{
              margin: "50px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Cart bo'sh</h1>
            <Link style={{ width: "120px" }} className="go__home" to={"/"}>
              Goo Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
