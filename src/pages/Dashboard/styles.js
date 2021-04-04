import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  .container-body{
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div`
  background: var(--shape);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  margin: 0 1.25rem;
  height: 132px;

  &:first-child {
    width: 239px;
    display: flex;
    align-items: center;
  }
  &:last-child {
    width: 239px;
    display: flex;
    align-items: center;
  }
  transition: transform 0.2s;
  &:hover {
    transform: translateX(2px)
  }
`;
export const CardContainer = styled.div`
  display: flex;
  width: 464px;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
`;

export const CardContentSeparate = styled(CardContent)`
  border-right: 1px solid #111;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
      font-size: 1rem;
  }
  h2 {
      font-size: 54px;
      font-weight: 900;
      color: var(--yellow)
  }
`;
