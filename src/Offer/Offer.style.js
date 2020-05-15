import styled from 'styled-components';
import {
  typography,
  color,
  spacing
} from '../shared/styles';

const OfferSide = `
  height: 300px;
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
`

export const OfferSideFront = styled.div`
  ${OfferSide};
  background-color: ${color.seafoam};
  &:hover {
    transform: rotateY(-180deg);
  }
`

export const OfferSideBack = styled.div`
  ${OfferSide};
  -webkit-transform: rotateY( 180deg);
  -moz-transform: rotateY( 180deg);
  -o-transform: rotateY( 180deg);
  transform: rotateY( 180deg);
  background-color: ${color.warning};
  &:hover {
    background-color: ${color.warning};
    transform: rotateY(0);
  }
`

export const Wrapper = styled.div`
  perspective: 3000px;
  -moz-perspective: 3000px;
  position: relative;
  &:hover ${OfferSideFront} {
    transform: rotateY(-180deg);
  }
  &:hover ${OfferSideBack} {
    transform: rotateY(0);
  }
`;

export const Title = styled.div`
  font-size: ${typography.s3};
  font-family: ${typography.type.primary};
`

export const OfferHeader = styled.div`
  padding: ${spacing.padding.small}px;
`