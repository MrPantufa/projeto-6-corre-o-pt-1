// src/components/RestaurantCard.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Cover = styled.div`
  background: center/cover no-repeat url(${props => props.src});
  height: 240px;
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: '★';
    margin-right: 4px;
    color: #FFC107;
  }
`;

const Description = styled.p`
  flex: 1;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 16px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  align-self: flex-start;
`;

export function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();
  return (
    <Card>
      <Cover src={restaurant.cover}>
        <Badge>{restaurant.category}</Badge>
      </Cover>
      <Content>
        <HeaderSection>
          <Title>{restaurant.name}</Title>
          <Rating>{restaurant.rating.toFixed(1)}</Rating>
        </HeaderSection>
        <Description>{restaurant.description}</Description>
        <Button onClick={() => navigate(`/restaurante/${restaurant.id}`)}>
          Saiba mais
        </Button>
      </Content>
    </Card>
  );
}
