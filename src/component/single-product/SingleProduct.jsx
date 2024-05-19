import React, { useState } from "react";
const SingleProduct = ({ data }) => {
  const [url, setUrl] = useState(data?.images[0]);
  return (
    <div style={{ padding: "60px 0" }} className="single__page container">
      <div className="images">
        <div className="images__item">
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.images[0]}
            alt={data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.images[1]}
            alt={data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.images[2]}
            alt={data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.images[3]}
            alt={data?.title}
          />
        </div>
        <img
          className="pro__img"
          src={url || data?.images[0]}
          alt={data?.title}
        />
      </div>
      <div className="product__card__about">
        <h4 class="product__title">{data?.title}</h4>
        <div class="product__share">
          <div class="prodacts_box_card_rating">
            Rating : {data?.rating?.rate}
            <div class="prodacts_box_card_rating_comment">
              <span>0 ta sharh</span>
            </div>
          </div>
          <span>
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/share.svg"
              alt="Share"
            />
            <h6>Ulashish</h6>
          </span>
        </div>
        <h5 class="price">Mahsulot narxi : {data?.price} $</h5>
        <p class="product__count">
          Qolgan mahsulotlar soni {data?.rating?.count} ta
        </p>
        <h5 class="product__description">Description : {data?.description}</h5>
        <h4 class="product__categories">Category: {data?.category}</h4>
      </div>
    </div>
  );
};

export default SingleProduct;
