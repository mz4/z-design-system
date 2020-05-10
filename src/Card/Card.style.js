import styled from 'styled-components';
import { typography, color } from '../shared/styles';

export const Wrapper = styled.div`
  align-items: left;
  border-radius: 3px;
  border: 1px solid #c6c6c6;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.div`
  flex-basis: 30%;
  -webkit-flex-basis: 30%;
  -ms-flex-preferred-size: 30%;
`;

export const Img = styled.img`
  max-width: 90%;
  max-height: 100%;
  display: block;
`;

export const Info = styled.div`
  flex-basis: 70%;
  -webkit-flex-basis: 70%;
  -ms-flex-preferred-size: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;  
`;

export const Header = styled.div`
  flex-basis: 80%;
  -webkit-flex-basis: 80%;
  -ms-flex-preferred-size: 80%; 
`;

export const RoomInfo = styled.div`
  flex-basis: 80%;
  -webkit-flex-basis: 80%;
  -ms-flex-preferred-size: 80%; 
`;

export const BodyContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: left;  
`;

export const ReviewHotel = styled.div`
  flex-basis: 40%;
  -webkit-flex-basis: 40%;
  -ms-flex-preferred-size: 40%;
  text-align: right; 
`;

export const RoomPrice = styled.div`
  flex-basis: 40%;
  -webkit-flex-basis: 40%;
  -ms-flex-preferred-size: 40%;
  text-align: right; 
`;

export const Title = styled.div`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.m2}px;
`;

export const SubTitle = styled.div`
  font-family: ${typography.type.code};
  font-size: ${typography.size.s2}px;
  color: ${color.mediumdark};
`;

export const Type = styled.div`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
`;

export const Price = styled.div`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.m2}px;
  color: ${color.seafoam};
`;

export const Availability = styled.div`
  font-family: ${typography.type.code};
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  color: ${color.warning};
`;

export const Vote = styled.div`
  display: block;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.m2}px;
  color: ${color.positive};
`;

export const ReviewCounter = styled.div`
  font-family: ${typography.type.code};
  font-size: ${typography.size.s2}px;
  color: ${color.mediumdark};
`;

export const Content = styled.div`
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;