import React from "react";

import {
  ProductHeadline,
  Description,
  ProductPriceWrapper,
  ProductPrice,
  ProductDescriptionWrapper,
  ProductHeadlineWrapper,
  ProductDiscount,
  CompanyName,
  CTAWrapper,
  ATCButton,
  ItemCounterWrapper,
} from "./productDescriptionStyles";

import cartIcon from "../../assets/images/icon-cart.svg";

const ProductDescription = () => {
  return (
    <ProductDescriptionWrapper>
      <ProductHeadlineWrapper>
        <CompanyName>Sneaker Company</CompanyName>
        <ProductHeadline>Fall Limited Edition Sneakers</ProductHeadline>
      </ProductHeadlineWrapper>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Description>
      <ProductPriceWrapper>
        <ProductPrice>$125.00</ProductPrice>
        <ProductDiscount>50%</ProductDiscount>
      </ProductPriceWrapper>
      <p
        style={{
          margin: "1.5rem 0 4rem 0",
          fontSize: "2rem",
          fontWeight: "500",
          color: "var(--grayish-blue",
          textDecoration: "line-through",
        }}>
        $250.00
      </p>
      <CTAWrapper>
        <ItemCounterWrapper>
          <p>-</p>
          <p>0</p>
          <p>+</p>
        </ItemCounterWrapper>
        <ATCButton>
          <img
            style={{ marginRight: "1.5rem" }}
            src={cartIcon}
            alt='cart-icon'
          />
          Add To Cart
        </ATCButton>
      </CTAWrapper>
    </ProductDescriptionWrapper>
  );
};

export default ProductDescription;
