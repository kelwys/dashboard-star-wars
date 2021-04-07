import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 632px;
  padding: 30px;
  background: var(--shape);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  text-align: left;

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  table {
    width: 100%;
    margin-top: 1rem;

    th {
      border-bottom: 1px solid #5E5E5E;
      padding: 0.50rem 0;
    }
    td {
      border-bottom: 1px solid #e9e9e9;
      padding: 0.50rem 0;
    }
  }
`;
