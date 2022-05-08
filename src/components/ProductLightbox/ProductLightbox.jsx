import React from "react";
import uuid from "react-uuid";

import { paths } from "./imagePaths";

import {
  LightBoxWrapper,
  PrimaryImageContainer,
  SecondaryImageContainer,
} from "./productLightboxStyles";

import Image from "./Image/Image";

const ProductLightbox = () => {
  return (
    <LightBoxWrapper>
      <PrimaryImageContainer>
        <Image src={paths[0]} width='55%' />
      </PrimaryImageContainer>
      <SecondaryImageContainer>
        <Image key={uuid()} src={paths[1]} width='10%' height='auto' />
        <Image key={uuid()} src={paths[1]} width='10%' height='auto' />
        <Image key={uuid()} src={paths[1]} width='10%' height='auto' />
        <Image key={uuid()} src={paths[1]} width='10%' height='auto' />
      </SecondaryImageContainer>
    </LightBoxWrapper>
  );
};

export default ProductLightbox;
