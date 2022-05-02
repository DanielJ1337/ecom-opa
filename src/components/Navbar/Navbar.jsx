import React from "react";

import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import profileImg from "../../assets/images/image-avatar.png";

import {
  NavWrapper,
  LogoContainer,
  LinkContainer,
  LinkItem,
  ProfileInformation,
  ProfileImage,
} from "./navbarStyles";

const Navbar = () => {
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
        <img style={{ cursor: "pointer" }} src={cart} alt='cart-logo' />
        <ProfileImage src={profileImg}></ProfileImage>
      </ProfileInformation>
    </NavWrapper>
  );
};

export default Navbar;
