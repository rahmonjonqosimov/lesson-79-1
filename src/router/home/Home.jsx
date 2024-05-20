import React from "react";
import Hero from "../../component/hero/Hero";
import Product from "../../component/product/Product";
import { useGetProductsQuery } from "../../redux/ProductApi";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <>
      <Hero />
      <Product
        data={data?.products}
        isLoading={isLoading}
        title={"Our Products"}
        btn={true}
      />
    </>
  );
};

export default Home;
