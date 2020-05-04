import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Loader } from './Loader';

const Wrapper = styled.section`
  margin: 4em;
  & div {
    margin-right: 4em;    
  }
`;

export default {
  title: 'Design System | Loader',
  component: Loader,
};

export const allLoaders = () => (
  <div>
    <Wrapper>
      <Loader size='50' color = '#00bfff' sizeUnit = 'px' />
      <Loader size='75' color = '#d100a0' sizeUnit = 'px' />
      <Loader size='100' color = '#34d100' sizeUnit = 'px' />
    </Wrapper>

  </div>
);