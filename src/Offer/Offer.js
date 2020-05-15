import React from 'react';
import { 
  Wrapper, 
  OfferSideFront, 
  OfferSideBack,
  OfferHeader,
  Title 
} from './Offer.style';

export function Offer({
  OfferATitle,
  OfferBTitle,
}) {
  return (
    <Wrapper>
      <OfferSideFront>
        <OfferHeader>
          <Title>{OfferATitle}</Title>
        </OfferHeader>
      </OfferSideFront>
      <OfferSideBack>
        <OfferHeader>
          <Title>{OfferBTitle}</Title>
        </OfferHeader>
      </OfferSideBack>
    </Wrapper>
  )
}