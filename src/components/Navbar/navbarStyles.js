import styled from "styled-components";

const NavWrapper = styled.nav`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  border-bottom: 1px solid var(--grayish-blue);
  padding: 3rem 0 4rem 0;
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

const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export {
  NavWrapper,
  LogoContainer,
  LinkContainer,
  LinkItem,
  ProfileInformation,
  ProfileImage,
};
