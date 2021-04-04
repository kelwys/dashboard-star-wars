import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 250px;
  height: 100vh;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
`;

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
    margin: 2rem 0;

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
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
  transition: transform 0.2s;
  &:hover {
    transform: translateY(2px)
  }
`;