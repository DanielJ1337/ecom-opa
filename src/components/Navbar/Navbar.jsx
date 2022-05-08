import React, { useState } from "react";

import logo from "../../assets/images/logo.svg";
import cartLogo from "../../assets/images/icon-cart.svg";
import profileImg from "../../assets/images/image-avatar.png";

import {
  NavWrapper,
  LogoContainer,
  LinkContainer,
  LinkItem,
  ProfileInformation,
  ProfileImage,
  CartIcon,
  BasketSizeContainer,
} from "./navbarStyles";
import Cart from "../Cart/Cart";
import { useCart } from "../../lib/cartContext";

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const state = useCart();

  return (
    <NavWrapper>
      <LogoContainer>
        <img src={logo} alt='logo' />
      </LogoContainer>
      <LinkContainer>
        <LinkItem>Collections</LinkItem>
        <LinkItem>Men</LinkItem>
        <LinkItem>Women</LinkItem>
        <LinkItem>About</LinkItem>
        <LinkItem>Contact</LinkItem>
      </LinkContainer>
      <ProfileInformation>
        <CartIcon
          onClick={(e) => {
            toggleCart ? setToggleCart(false) : setToggleCart(true);
          }}
          src={cartLogo}
          alt='cart-logo'
        />
        <BasketSizeContainer>{state.cart.length}</BasketSizeContainer>
        {toggleCart && <Cart />}

        <ProfileImage src={profileImg}></ProfileImage>
      </ProfileInformation>
    </NavWrapper>
  );
};

export default Navbar;
