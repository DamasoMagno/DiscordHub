import { Container } from "./styles";

interface ContainerProps {
  content: string;
}

export function Description({ content }: ContainerProps) {
  return <Container>{content}</Container>;
}
