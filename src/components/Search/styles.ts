import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: #121214;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  padding-right: 0.75rem;
  transition: border-color 0.25s;

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
    border-color: #00b37e;
  }
`;
