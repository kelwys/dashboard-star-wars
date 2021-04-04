import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { Container, Content, Settings } from './styles';
import logoImg from '../../assets/logo.png';
import dashboardImg from '../../assets/dashboard.svg';
import personagensImg from '../../assets/personagens.svg';
import planetasImg from '../../assets/planetas.svg';
import naveImg from '../../assets/nave.svg';

export function Menu() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo star wars" />
        <ul>
          <li>
            <img src={dashboardImg} alt="Dashboard" />
            <p>Dashboard</p>
          </li>
          <li>
            <img src={personagensImg} alt="Personagens" />
            <p>Personagens</p>
          </li>
          <li>
            <img src={planetasImg} alt="Planetas" />
            <p>Planetas e luas</p>
          </li>
          <li>
            <img src={naveImg} alt="Naves" />
            <p>Naves espaciais</p>
          </li>
        </ul>
        <Settings>
          <FiSettings size={20} />
          <p>Configuração</p>
        </Settings>
      </Content>
    </Container>
  );
}
