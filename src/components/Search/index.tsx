/* eslint-disable react/display-name */
import { MagnifyingGlass } from "phosphor-react";
import { ComponentProps, forwardRef } from "react";
import { Container } from "./styles";

interface SearchProps extends ComponentProps<"input"> {}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ ...props }, ref) => (
    <Container>
      <input ref={ref} {...props} />
      <MagnifyingGlass />
    </Container>
  )
);
