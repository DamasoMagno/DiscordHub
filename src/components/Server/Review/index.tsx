import { Star, Hand } from "phosphor-react";

import { Container } from "./styles";

interface ReviewProps {
  title: string;
  description?: string;
  starCount?: number;
}

export function Review({ title, description, starCount }: ReviewProps) {
  return (
    <Container>
      <header>
        <strong>{title}</strong>

        <ul>
          {Array.from({ length: starCount ?? 1 }).map((_, index) => (
            <li key={index}>
              <Star size={24} color="#d3d600" weight="fill" />
            </li>
          ))}
        </ul>
      </header>

      <p>{description}</p>

      <div className="actions">
        <button>
          <Hand size={20} />
        </button>
        <button>
          <Hand size={20} />
        </button>
      </div>
    </Container>
  );
}
