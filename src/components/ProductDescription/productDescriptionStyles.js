import styled from "styled-components";

const ProductDescriptionWrapper = styled.div`
  text-align: left;
  max-width: 65%;
`;

const ProductHeadlineWrapper = styled.div``;

const CompanyName = styled.p`
  color: var(--orange);
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ProductHeadline = styled.h2`
  font-size: 5.25rem;
  line-height: 1.15;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  color: var(--dark-grayish-blue);
  margin: 2.5rem 0;
  width: 90%;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.p`
  font-size: 2.75rem;
  font-weight: bold;
`;

const ProductDiscount = styled.p`
  background: var(--pale-orange);
  padding: 0.5rem;
  border-radius: 7px;
  color: var(--orange);
  font-weight: bold;
  font-size: 1.8rem;
  margin-left: 2rem;
`;

const CTAWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;

const ItemCounterWrapper = styled.div`
  background: var(--light-grayish-blue);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  flex: 0.4;
  border-radius: 12px;

  p:nth-child(2) {
    color: var(--black-lightbox-background);
    font-size: 2.25rem;
  }
`;

const Button = styled.button`
  color: var(--orange);
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 2.25rem;
  font-weight: bolder;
`;

const ATCButton = styled.button`
  background: var(--orange);
  color: var(--white);
  font-weight: bold;
  padding: 1rem 4rem;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex: 0.6;
  justify-content: center;
  font-family: inherit;
  font-size: 1.6rem;

  svg path {
    fill: white;
  }
`;

const styles = {
  oldPrice: {
    margin: "1.5rem 0 4rem 0",
    fontSize: "2rem",
    fontWeight: "500",
    color: "var(--grayish-blue",
    textDecoration: "line-through",
  },
};

export {
  styles,
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
  Button,
};
