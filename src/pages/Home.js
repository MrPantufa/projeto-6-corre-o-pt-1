// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { restaurants } from '../data/restaurants';
import { RestaurantCard } from '../components/RestaurantCard';

const Main = styled.main`
  padding: 2rem 1rem;
  background: #FEF4EC;  /* fundo levemente amarelado */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 600px);
  gap: 24px;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Header />

      <Main>
        <Grid>
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </Grid>
      </Main>

      <Footer />
    </>
  );
}

export default Home;
