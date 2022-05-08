import React from "react";

const Image = ({ src, width, height }) => {
  return (
    <>
      <img
        src={src}
        style={{ margin: "1.5rem 2rem", borderRadius: "12px" }}
        width={width}
        height={height}
        alt={"product-img-" + Math.floor(Math.random() * 12)}
      />
    </>
  );
};

export default Image;
