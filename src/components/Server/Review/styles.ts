import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
  margin: 1rem 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      display: block;
      line-height: 1.6;
      color: #fff;
    }

    ul {
      list-style: none;
      color: white;

      display: flex;
      align-items: center;
    }
  }

  p {
    margin-top: 0.875rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #fff;
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    gap: 0.25rem;
    justify-content: flex-end;

    button {
      border-radius: 0.125rem;
      background: #2d2d31;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      font-size: 0.5rem;
      cursor: pointer;
      padding: 0.5rem;
      color: white;
    }
  }
`;
