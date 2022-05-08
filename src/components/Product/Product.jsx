import React from "react";

import { ProductLightbox, ProductDescription } from "../../components";

import { ProductContainer, styles } from "./productStyles";

const Product = () => {
  return (
    <ProductContainer style={styles.container}>
      <ProductLightbox />
      <ProductDescription />
    </ProductContainer>
  );
};

export default Product;
