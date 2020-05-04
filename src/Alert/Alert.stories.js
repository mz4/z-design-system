import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Alert } from './Alert';

const Wrapper = styled.section`
  margin: 2em;
  & div {
    margin-bottom: 1em;
  }
`;

export default {
  title: 'Design System|Alert',
  component: Alert,
};

export const allAlerts = () => (
  <div>
    <Wrapper>
      <Alert appearance="danger">This is an Alert Message!</Alert>
      <Alert appearance="success">This is a Success Message!</Alert>
      <Alert appearance="error">This is an Error Message!</Alert>
    </Wrapper>
  </div>
);