import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: white;
      font-size: 1.25rem;
    }

    button {
      background-color: transparent;
      border: 1px solid green;
      color: green;
      border-radius: 8px;
      height: 2rem;
      padding: 0 1rem;
      cursor: pointer;
    }
  }

  .servers {
    max-width: 1244px;
    margin: 1rem auto 0;
    
    column-count: 1;
    column-gap: 1rem;

    @media (min-width: 724px) and (max-width: 1024px) {
      column-count: 2;
    }

    @media (min-width: 1024px) {
      column-count: 3;
    }

    > div {
      margin-bottom: 1rem;
    }
  }
`;