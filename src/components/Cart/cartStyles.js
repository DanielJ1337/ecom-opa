import styled from "styled-components";

const CartWrapper = styled.div`
  box-shadow: -1px 9px 26px -10px rgba(0, 0, 0, 0.3),
    -1px 9px 26px -10px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  width: 35rem;
  max-height: 210px;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  position: absolute;
  top: 75%;
  right: 0%;
  z-index: 1000;
`;

const HeadlineWrapper = styled.div`
  border-bottom: 1px solid var(--light-grayish-blue);
  text-align: left;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
`;
const CartName = styled.h3`
  font-size: 1.6rem;
`;
const CartInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--grayish-blue);
  font-size: 1.4rem;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 3px;
`;
const ProductInfoWrapper = styled.div`
  text-align: left;
  margin-left: 1rem;
  flex: 1;
`;

const DeleteButton = styled.button``;

export {
  CartWrapper,
  CartInformation,
  HeadlineWrapper,
  CartName,
  ProductImage,
  ProductInfoWrapper,
  DeleteButton,
};
