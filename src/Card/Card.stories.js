import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

const Wrapper = styled.section`
  margin: 2em;
  & div {
    margin-bottom: 1em;
  }
`;

export default {
  title: 'Design System|Card',
  component: Card,
};

export const allCards = () => (
  <div>
    <Wrapper>
      <Card title='Hotel Location' footer='This is footer'>
        <p>
          <strong>Formatted Address :</strong>
          <span>May street</span>
        </p>
        <p>
          <strong>ZipCode :</strong>
          <span>090300</span>
        </p>
        <p>
          <strong>City :</strong>
          <span>Paris</span>
        </p>
      </Card>
    </Wrapper>
  </div>
);