import { ReactNode } from "react";
import { Server } from "../Server";
import { Container } from "./styles";

interface ServerListProps {
  children: ReactNode;
  count: number;
  type: "server" | "review";
}

export function ServerList({ count, children, type }: ServerListProps) {
  return (
    <Container>
      {children}

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
