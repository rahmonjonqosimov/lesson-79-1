import React, { useState, memo } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetSearchProductsQuery } from "../../redux/ProductApi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const wishes = useSelector((s) => s.heart.value);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { data } = useGetSearchProductsQuery({ q: value });

  const serachItem = data?.products?.map((el) => (
    <div
      onClick={() => (navigate(`/product/${el.id}`), setValue(""))}
      key={el.id}
    >
      <div className="serch__item">
        <img src={el.images[0]} width={50} alt="" />
        <h4>{el.title}</h4>
      </div>
      <hr />
    </div>
  ));

  let LINKS = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
  ];
  let link = LINKS.map((el) => (
    <li key={el.id}>
      <NavLink to={el.url} className="link">
        {el.title}
      </NavLink>
    </li>
  ));

  return (
    <section className="header">
      <div className="container header__content">
        <NavLink to={"/"} className="logo">
          Exclusive
        </NavLink>

        <div className="component">
          <form>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              placeholder="Search..."
              required
            />
            <button>
              <IoIosSearch className="search" />
            </button>
          </form>
          {value.trim() ? (
            <>
              <div className="search__items">{serachItem}</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {link}
          <li>
            <NavLink to={"/wishes"}>
              <GoHeart className="heart" />
              <sup className="count">{wishes.length}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <BsCart3 className="heart" />
              <sup className="count">{0}</sup>
            </NavLink>
          </li>
        </ul>
      </div>
      {value.trim() ? (
        <div onClick={() => setValue("")} className="serach__outline"></div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default memo(Navbar);
