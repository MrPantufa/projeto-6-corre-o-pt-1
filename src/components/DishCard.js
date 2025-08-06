import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 4px 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`;

const Description = styled.p`
  flex: 1;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 0;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover { opacity: 0.9; }
`;

export function DishCard({ dish }) {
  return (
    <Card>
      <Cover src={dish.image} alt={dish.name} />
      <Info>
        <Title>{dish.name}</Title>
        <Description>{dish.description}</Description>
        <Button>Adicionar</Button>
      </Info>
    </Card>
  );
}
