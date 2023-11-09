import Image from "next/image";
import { Star, DiscordLogo } from "phosphor-react";

import { Container } from "./styles";

interface HeaderProps {
  serverName: string;
  tags: string[];
  starCount?: number;
  online?: number;
}

export function Header({ online, serverName, tags, starCount }: HeaderProps) {
  return (
    <Container>
      <Image
        src="https://github.com/DamasoMagno.png"
        alt=""
        width={500}
        height={500}
        className="banner"
      />

      <div className="content">
        <div className="info">
          <Image
            src="https://github.com/DamasoMagno.png"
            alt="Damaso"
            width={500}
            height={500}
          />
          <strong>{serverName}</strong>
        </div>

        <div className="status">
          <ul>
            {Array.from({ length: starCount ?? 0 }).map((_, index) => (
              <li key={index}>
                <Star size={24} color="#d3d600" weight="fill" />
              </li>
            ))}
          </ul>

          <div>
            {online && (
              <span>
                <div /> {online}
              </span>
            )}

            <span>
              <DiscordLogo size={20} />
            </span>
          </div>
        </div>
      </div>

      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Container>
  );
}
