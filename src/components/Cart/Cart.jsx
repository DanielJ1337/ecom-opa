import React from "react";

import { BsTrashFill } from "react-icons/bs";

import image from "../../assets/images/image-product-1-thumbnail.jpg";

import { ATCButton } from "../ProductDescription/productDescriptionStyles";

import {
  CartWrapper,
  CartInformation,
  HeadlineWrapper,
  CartName,
  ProductImage,
  ProductInfoWrapper,
} from "./cartStyles";

import { useCart } from "../../lib/cartContext";

const Cart = () => {
  const state = useCart();
  return (
    <CartWrapper>
      <HeadlineWrapper>
        <CartName>Cart</CartName>
      </HeadlineWrapper>

      <CartInformation>
        <ProductImage src={image} />
        <ProductInfoWrapper>
          <p style={{ marginBottom: ".5rem" }}>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {state.amount}
            <span
              style={{
                color: "var(--black-lightbox-background)",
                fontWeight: "700",
              }}>
              {" "}
              {"$" + state.total}
            </span>
          </p>
        </ProductInfoWrapper>
        <BsTrashFill style={{ fontSize: "1.6rem" }} />
      </CartInformation>
      <div style={{ marginTop: "1.5rem", width: "100%" }}>
        <ATCButton style={{ padding: "1.5rem 4rem" }}>Checkout</ATCButton>
      </div>
    </CartWrapper>
  );
};

export default Cart;
