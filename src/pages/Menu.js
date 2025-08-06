// src/pages/Menu.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { restaurants } from '../data/restaurants';

const MenuNav = styled.nav`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  color: #C0392B;
  z-index: 10;
`;

const Cover = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  height: 240px;
  background: url(${props => props.src}) center/cover no-repeat;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 101px;
  height: 33px;
  line-height: 33px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  color: #FFF;
`;

const RestaurantName = styled.h1`
  position: absolute;
  bottom: 24px;
  left: 16px;
  margin: 0;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: 700;
`;

const Main = styled.main`
  margin-top: 0;
  padding: 0 16px 32px;
  background: #fff0e3ff;  
`;

const Grid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 260px);
  gap: 24px;
  justify-content: center;
`;

const DishCard = styled.div`
  width: 260px;
  background: #E66767;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .info {
    padding: 24px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .info h3 {
    margin: 0 0 12px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 20px;
    font-weight: 700;
  }

  .info p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
  }

  .info button {
    width: 100%;
    background: #FEF4EC;
    color: #E66767;
    border: none;
    padding: 16px 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    margin-top: auto;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default function Menu() {
  const { id } = useParams();
  const resto = restaurants.find(r => String(r.id) === id);
  const cartCount = 0;

  if (!resto) return <p>Restaurante não encontrado.</p>;

  const pratos = Array.from({ length: 6 }, (_, i) => ({
    name: resto.category === 'Japonesa' ? `Sushi ${i + 1}` : `Pizza Marguerita`,
    description:
      resto.category === 'Japonesa'
        ? 'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.'
        : 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    img:
      resto.category === 'Japonesa'
        ? '/images/sushi.png'
        : '/images/pizza.png'
  }));

  return (
    <>
      <MenuNav>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Restaurantes
        </Link>
        <span>{cartCount} produto(s) no carrinho</span>
      </MenuNav>

      <Header />

      <Cover src={resto.cover}>
        <CategoryBadge>{resto.category}</CategoryBadge>
        <RestaurantName>{resto.name}</RestaurantName>
      </Cover>

      <Main>
        <Grid>
          {pratos.map((d, i) => (
            <DishCard key={i}>
              <img src={d.img} alt={d.name} />
              <div className="info">
                <h3>{d.name}</h3>
                <p>{d.description}</p>
                <button>Adicionar ao carrinho</button>
              </div>
            </DishCard>
          ))}
        </Grid>
      </Main>

      <Footer />
    </>
  );
}
