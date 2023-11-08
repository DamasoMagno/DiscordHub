import { Server } from "../Server";
import { Container } from "./styles";

interface ServerListProps {
  title: string;
  navigation: string;
  count: number;
  type: "server" | "review";
}

export function ServerList({
  count,
  navigation,
  title,
  type,
}: ServerListProps) {
  return (
    <Container>
      <header>
        <strong>{title}</strong>
        <button>{navigation}</button>
      </header>

      <div className="servers">
        {Array.from({ length: count }).map((_, index) => (
          <Server.Root key={index}>
            <Server.Header
              serverName="Star Suco"
              tags={["Comunidade"]}
              starCount={3}
              online={3}
            />
            {type === "server" ? (
              <Server.Description
                content="
                  Lorem ipsum dolor sit amet consectetur. Feugiat risus sed
                  mattis libero tempus. Id bibendum tincidunt semper sed
                  accumsan lectus. Duis elit vulputate egestas sapien non eu
                  vitae laoreet eu. Ac feugiat commodo purus auctor sit
                "
              />
            ) : (
              <Server.Review
                title="Very funnny"
                description="
                  Lorem ipsum dolor sit amet consectetur. Feugiat risus sed
                  mattis libero tempus. Id bibendum tincidunt semper sed
                  accumsan lectus. Duis elit vulputate egestas sapien non eu
                  vitae laoreet eu. Ac feugiat commodo purus auctor sit
                "
              />
            )}

            <Server.Actions>
              <Server.Action>Entrar na comnidade</Server.Action>
              <Server.Action variant="ghost">Detalhes</Server.Action>
            </Server.Actions>
          </Server.Root>
        ))}
      </div>
    </Container>
  );
}
