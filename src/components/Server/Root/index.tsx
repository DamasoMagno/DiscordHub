import { ReactNode } from "react";

import { Container } from "./styles";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <Container>{children}</Container>;
}
