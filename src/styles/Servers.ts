import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  background-color: #202024;

  .search {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: #121214;
    border: 1px solid transparent;
    color: #fff;
    border-radius: 8px;
    width: 500px;
    padding: 0.25rem 0.5rem;
    padding-right: 0.75rem;

    input {
      border: 0;
      background-color: transparent;
      outline: 0;
      color: white;
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 0.5rem;
      flex: 1;
    }

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }

    &:focus-within {
      border-color: red;
    }
  }

  .search {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: #121214;
    border: 1px solid transparent;
    color: #fff;
    border-radius: 8px;
    width: 400px;
    padding: 0.25rem 0.5rem;
    padding-right: 0.75rem;

    input {
      border: 0;
      background-color: transparent;
      outline: 0;
      color: white;
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 0.5rem;
      flex: 1;
    }

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }

    &:focus-within {
      border-color: red;
    }
  }
`;

export const ServerList = styled.section`
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
    margin-top: 1rem;
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