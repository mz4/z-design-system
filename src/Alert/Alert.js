import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { color, typography } from '../shared/styles';
import { easing } from '../shared/animation';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  DANGER: 'danger',
  SUCCESS: 'success',
  ERROR: 'error'
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const StyledAlert = styled.div`
  height: 20px;
  line-height: 20px;
  padding: 15px;        
  border: 1px solid #f3f3f3;
  font-size: ${props => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
  font-weight: ${typography.weight.extrabold};
  font-family: ${typography.type.primary};
  ${props =>
    props.appearance === APPEARANCES.DANGER &&
    `
      border-left: 6px solid #f5ed07;
      background: #fff;
      color: #666;

      ${!props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.light)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.light, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.light, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}
    ${props =>
      props.appearance === APPEARANCES.SUCCESS &&
      `
        border-left: 6px solid ${color.green};
        background: #fff;
        color: #666;
  
        ${!props.isLoading &&
          `
            &:hover {
              background: ${darken(0.05, color.light)};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
            &:focus {
              box-shadow: ${rgba(color.light, 0.4)} 0 1px 9px 2px;
            }
            &:focus:hover {
              box-shadow: ${rgba(color.light, 0.2)} 0 8px 18px 0px;
            }
          `}
      `}
      ${props =>
        props.appearance === APPEARANCES.ERROR &&
        `
          border-left: 6px solid ${color.error};
          background: #fff;
          color: #666;
    
          ${!props.isLoading &&
            `
              &:hover {
                background: ${darken(0.05, color.light)};
              }
              &:active {
                box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
              }
              &:focus {
                box-shadow: ${rgba(color.light, 0.4)} 0 1px 9px 2px;
              }
              &:focus:hover {
                box-shadow: ${rgba(color.light, 0.2)} 0 8px 18px 0px;
              }
            `}
        `}
`;

export function Alert({
  children,
  ...props
}) {

  let SelectedAlert = StyledAlert;

  return (
    <SelectedAlert {...props}>
      <Text>{children}</Text>
    </SelectedAlert>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
};

Alert.defaultProps = {
  appearance: APPEARANCES.DANGER,
};
