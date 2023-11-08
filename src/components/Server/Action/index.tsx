import { ComponentProps, ReactNode } from "react";

import { Container, Variant } from "./styles";

interface ActionsProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: Variant
}

export function Action({ children, ...props }: ActionsProps) {
  return <Container {...props}>{children}</Container>;
}
