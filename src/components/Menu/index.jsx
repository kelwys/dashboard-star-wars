/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { MdMenu, MdClose } from 'react-icons/md';
import { Container, Content, Settings, MenuToggle } from './styles';
import logoImg from '../../assets/logo.png';
import dashboardImg from '../../assets/dashboard.svg';
import personagensImg from '../../assets/personagens.svg';
import planetasImg from '../../assets/planetas.svg';
import naveImg from '../../assets/nave.svg';

export function Menu() {
  const [showToggleMenu, setshowToggleMenu] = useState(false);

  const handleShowtoggleMenu = () => {
    setshowToggleMenu(!showToggleMenu);
    document.body.style.overflowY = showToggleMenu ? 'initial' : 'hidden';
  };

  return (
    <>
      <MenuToggle>
        <button type="button" onClick={handleShowtoggleMenu}>
          {showToggleMenu
            ? <MdClose size="50" color="#fff" />
            : <MdMenu size="50" color="#000" />}
        </button>
      </MenuToggle>
      <Container className={showToggleMenu ? 'openMenu' : ''}>
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
    </>
  );
}
