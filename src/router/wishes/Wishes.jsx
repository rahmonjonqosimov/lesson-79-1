import React from "react";
import Product from "../../component/product/Product";
import { useSelector } from "react-redux";

const Wishes = () => {
  const data = useSelector((s) => s.heart.value);
  return (
    <>
      {data.length ? (
        <Product title={"Sevimlilar"} data={data} isLoading={false} />
      ) : (
        <h1
          style={{
            margin: "30px auto",
            textAlign: "center",
          }}
        >
          Sevimlilar hozircha mavjud emas{" "}
        </h1>
      )}
    </>
  );
};

export default Wishes;
