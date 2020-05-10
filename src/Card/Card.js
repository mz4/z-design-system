import React from 'react';
import { Button } from '../Button/Button';
import hotelpic from '../shared/51603421.jpg';

import { 
  Wrapper,
  Content, 
  HeaderContainer,
  Header,
  FooterContainer, 
  Title,
  SubTitle,
  Vote,
  ReviewHotel,
  ReviewCounter,
  Image,
  Info,
  Img,
  BodyContainer,
  RoomInfo,
  Type,
  Availability,
  RoomPrice,
  Price
} from './Card.style';

export function Card({
  title,
  subtitle,
  vote,
  reviews,
  type,
  availability,
  price,
  buttonLabel,
  className
}) {
  return (
    <Wrapper className={className}>
      <Image>
        <Img src={hotelpic} />
      </Image>
      <Info>
        <Content>
          <HeaderContainer>
            <Header>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </Header>
            <ReviewHotel>
              <Vote>{vote}</Vote>
              <ReviewCounter>{reviews}</ReviewCounter>
            </ReviewHotel>
          </HeaderContainer>
          <BodyContainer>
            <RoomInfo>
              <Type>{type}</Type>
              <Availability>{availability}</Availability>
            </RoomInfo>
            <RoomPrice>
              <Price>{price}</Price>
            </RoomPrice>
          </BodyContainer>
        </Content>
        <FooterContainer>
            <Button appearance="primary" >
              {buttonLabel}
            </Button>
          </FooterContainer>
      </Info>
    </Wrapper>
  );
}