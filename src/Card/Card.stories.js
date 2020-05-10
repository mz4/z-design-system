import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

const StoryWrapper = styled.section`
  margin: 2em;
`;

export default {
  title: 'Design System|Card',
  component: Card,
};

export const allCards = () => (
  <div>
    <StoryWrapper>
      <Card 
        title='Hotel Coloseum' 
        subtitle='Rome, Spanish Steps' 
        footer=''
        vote='Very Good'
        reviews='60 Reviews'
        type='Double Room'
        availability='1 room left'
        price='$ 150'
        buttonLabel='Book'
        >
      </Card>
    </StoryWrapper>
  </div>
);