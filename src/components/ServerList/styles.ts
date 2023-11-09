import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1rem;

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