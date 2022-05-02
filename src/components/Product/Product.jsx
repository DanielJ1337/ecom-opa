import React from "react";

import { ProductLightbox, ProductDescription } from "../../components";

const Product = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        placeContent: " center",
        height: "80vh",
        width: "100vw",
      }}>
      <ProductLightbox />
      <ProductDescription />
    </div>
  );
};

export default Product;
