import { ReactNode } from "react";

import { Container } from "./styles";

interface ActionsProps {
  children: ReactNode
}

export function Actions({ children }: ActionsProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
