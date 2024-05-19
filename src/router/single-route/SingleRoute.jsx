import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/ProductApi";
import SingleProduct from "../../component/single-product/SingleProduct";

const SingleRoute = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SingleProduct data={data} />
    </>
  );
};

export default SingleRoute;
