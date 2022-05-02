import styled from "styled-components";

const NavWrapper = styled.nav`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  padding: 3rem 0 4rem 0;
  position: relative;

  &::after {
    border-bottom: 1px solid var(-light-grayish-blue);
    width: 100px;
    position: absolute;
  }
`;

const LogoContainer = styled.div`
  img {
    width: 17.5rem;
  }
`;

const LinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-self: flex-start;
  flex: 1;
`;

const LinkItem = styled.li`
  margin-left: 4.5rem;
  color: var(--dark-grayish-blue);
`;

const ProfileInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.09;
`;

const CartIcon = styled.img`
  cursor: pointer;
  display: relative;
`;

const BasketSizeContainer = styled.div`
  background: var(--orange);
  color: var(--white);
  width: 20px;
  font-size: 1rem;
  border-radius: 10px;
  position: absolute;
  top: 34%;
  right: 5%;
`;

const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
`;

export {
  NavWrapper,
  LogoContainer,
  LinkContainer,
  LinkItem,
  ProfileInformation,
  ProfileImage,
  CartIcon,
  BasketSizeContainer,
};
