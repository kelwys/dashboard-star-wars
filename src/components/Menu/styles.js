import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 250px;
  height: 100vh;
  padding: 3rem 0;

  display: flex;
  flex-direction: column;

  &.openMenu {
    transform: translate(0);
    position: absolute;
    overflow-y: hidden;
    top:0;
    left:0;

    width: 250px;
    height: 100vh;

    background-color: #000;
    opacity:0.9;

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    transform: translate(-250px);
    display: none;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  margin-top: 20px;
  margin-left: 50px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

  }
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: -5px;
    z-index: 11;

  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;

  font-size: 1rem;
  font-weight: 700;

  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    img {
      margin-bottom: .75rem;
    }
    transition: transform 0.2s;
    &:hover {
      transform: translateY(2px)
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 80px; */

  svg {
    margin-right: 0.5rem;
  }
  transition: transform 0.2s;
  &:hover {
    transform: translateY(2px)
  }
`;
