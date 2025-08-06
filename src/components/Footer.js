// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.div`
  width: 100%;
`;

/* Faixa superior clara */
const FooterTop = styled.div`
  background-color: #FFF8F3; /* mesma cor de fundo geral da página */
  height: 4rem;              /* altura da faixa superior */
`;

/* Seção principal do footer */
const FooterContainer = styled.footer`
  background-color: #FEF4EC; /* tom pastel mais escuro */
  text-align: center;
  padding: 3rem 1rem;
`;

const Logo = styled.img`
  height: 64px;
  object-fit: contain;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  & a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #EF5B5B;
    border-radius: 50%;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
  }
`;

const FooterText = styled.p`
  max-width: 600px;
  margin: 0.5rem auto;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #EF5B5B; /* vermelho consistente */
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTop />

      <FooterContainer>
        <Logo src={logoImg} alt="efodd" />

        <SocialLinks>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </SocialLinks>

        <FooterText>
          A efodd é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
}
