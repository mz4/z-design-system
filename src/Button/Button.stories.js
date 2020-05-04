import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

const Wrapper = styled.section`
  margin: 2em;
  & Button {
    margin-right: 1em;    
  }
`;

export default {
  title: 'Design System|Button',
  component: Button,
};

export const allButtons = () => (
  <div>
    <Wrapper>
      <Button appearance="primary" onClick={action('primary button action click')}>Primary</Button>
      <Button appearance="secondary" onClick={action('secondary button action click')}>Secondary</Button>
      <Button appearance="tertiary" onClick={action('tertiary button action click')}>Tertiary</Button>
    </Wrapper>

    <Wrapper>
      <Button appearance="primary" isDisabled>Primary</Button>
      <Button appearance="secondary" isDisabled>Secondary</Button>
      <Button appearance="tertiary" isDisabled>Tertiary</Button>
    </Wrapper>

  </div>
);