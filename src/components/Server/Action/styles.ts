import styled, { css } from "styled-components";

export type Variant = "ghost";

interface ContainerProps {
  variant?: Variant;
}

export const Container = styled.button<ContainerProps>`
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  width: 100%;
  transition: filter .25s;

  &:hover {
    filter: brightness(.9);
  }

  &:last-child {
    padding: 0 3rem;
    flex: 1;
  }

  ${(props) => {
    switch (props.variant) {
      case "ghost":
        return css`
          background-color: transparent;
          border: 1px solid #00b37e;
          color: #00b37e;
        `;
      default:
        return css`
          background-color: #00b37e;
          color: white;
        `;
    }
  }}
`;
