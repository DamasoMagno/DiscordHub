import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { Server } from "../components/Server";

import { Hero, MainServers } from "@/styles/Home";
import { Header } from "@/components/Header";

const serverInfo = {
  name: "Star Suco",
  description:
    "Lorem ipsum dolor sit amet consectetur. Feugiat risus sed mattis libero tempus. Id bibendum tincidunt semper sed accumsan lectus. Duis elit vulputate egestas sapien non eu",
  tags: ["Comunidade", "Brasil"],
  onlineMembers: 3,
  starReview: 3,
};

const serverReview = {
  name: "Star Suco",
  tags: ["Comunidade", "Brasil"],
  onlineMembers: 3,
  userCommentTitle: "Estou amando este servidor!!",
  userComment:
    "Lorem ipsum dolor sit amet consectetur. Feugiat risus sed mattis libero tempus.",
  userReview: 3,
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero>
        <h1>DiscordHub, aqui você encontra a comunidade perfeita para ti.</h1>

        <div className="search">
          <input placeholder="Busque servidores" />
          <MagnifyingGlass />
        </div>

        <div className="tags">
          <span>Tags populares</span>

          <ul>
            <li>
              <Link href="/">comunidade</Link>
            </li>
          </ul>
        </div>
      </Hero>

      <MainServers>
        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>

        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
        <Server.Root>
          <Server.Header
            serverName={serverInfo.name}
            tags={serverInfo.tags}
            starCount={serverInfo.starReview}
            online={serverInfo.onlineMembers}
          />
          <Server.Description content={serverInfo.description} />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
      </MainServers>

      <MainServers>
        <Server.Root>
          <Server.Header
            serverName={serverReview.name}
            tags={serverReview.tags}
            online={serverReview.onlineMembers}
          />
          <Server.Review
            title={serverReview.userCommentTitle}
            description={serverReview.userComment}
          />
          <Server.Actions>
            <Server.Action>Entrar na comnidade</Server.Action>
            <Server.Action variant="ghost">Detalhes</Server.Action>
          </Server.Actions>
        </Server.Root>
      </MainServers>
    </>
  );
}
