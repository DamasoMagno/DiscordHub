import styled from "styled-components";

export const Filters = styled.div`
  background-color: #202024;
  height: 120px;
  padding-top: 5rem;

  .filters {
    max-width: 1244px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 728px) {
      grid-template-columns: 1fr 300px;
    }
  }

  ul.tags {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    max-width: 1200px;
    margin: 1rem auto 0;

    li {
      background-color: #2d2d31;
      color: white;
      border-radius: 8px;
      padding: 1rem;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      button {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        color: white;
      }
    }
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1244px;
  margin: 0 auto;

  strong {
    color: white;
    font-size: 1.25rem;
  }

  button {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #00b37e;
    color: #00b37e;
    padding: 0 2rem;;
    font-size: 1rem;
    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Content = styled.section`
  margin-top: 2rem;
`;
