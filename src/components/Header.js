// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fundo from '../assets/fundo.png';
import logoImg from '../assets/logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  height: 384px;
  margin-top: -24px;
  background: url(${fundo}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoLink = styled(Link)`
  display: block;
`;

const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
  margin-bottom: 24px; /* distancia do logo até o texto */
`;

const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 1;
  color: #E66767;
  text-align: center;
  margin: 0;

  span {
    display: block;
  }

  /* indentar a segunda linha */
  span + span {
    margin-left: 60px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo src={logoImg} alt="efodd" />
      </LogoLink>
      <Subtitle>
        <span>Viva experiencias gastronomicas</span>
        <span>no conforto da sua casa</span>
      </Subtitle>
    </HeaderContainer>
  );
}
