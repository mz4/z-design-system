import React from 'react';
import styled from 'styled-components';

import { Offer } from './Offer';

const StoryWrapper = styled.section`
  margin: 2em;
  width: 300px;
  height: 600px;
`;

export default {
  title: 'Design System|Offer',
  component: Offer,
}

export const allOffers = () => (
  <div>
    <StoryWrapper>
      <Offer 
        OfferATitle='Offer A'
        OfferBTitle='Offer B'
        >
      </Offer>
    </StoryWrapper>
  </div>
)