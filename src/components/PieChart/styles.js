import styled from "styled-components";

export const ContainerChart = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  background: var(--shape);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;

  @media (max-width: 1214px) {
    width: 660px;
    justify-content: center;
  }
`;
