"use client";
import Link from "next/link";

import { Server } from "@/components/Server";
import { Search } from "@/components/Search";

import { Hero, PopularServersList, PopularReviewsList } from "@/styles/Home";
import { Header } from "@/components/Header";

const popularTags = ["Comunidade", "Jogos", "Amizade", "Programação"];

export default function Home() {
  return (
    <>
      <Header />

      <Hero>
        <h1>DiscordHub, aqui você encontra a comunidade perfeita para ti.</h1>

        <Search placeholder="Buscar servidores" />

        <div className="tags">
          <strong>Tags populares</strong>

          <ul>
            {popularTags.map((tag) => (
              <li key={tag}>
                <Link href="/">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Hero>

      <PopularServersList>
        <div className="header">
          <strong>Comunidades populares</strong>
          <button>Ver comunidades</button>
        </div>

        <div className="servers">
          <Server.Root>
            <Server.Header
              serverName="Star Suco"
              tags={["Comunidade", "Animes", "Conversa", "Amizade", "1", "2"]}
              starCount={3}
              online={3}
            />

            <Server.Description
              content="
                  Lorem ipsum dolor sit amet consectetur. Feugiat risus sed
                  mattis libero tempus. Id bibendum tincidunt semper sed
                  accumsan lectus. Duis elit vulputate egestas sapien non eu
                  vitae laoreet eu. Ac feugiat commodo purus auctor sit
                "
            />
            <Server.Actions>
              <Server.Action>Entrar na comnidade</Server.Action>
              <Server.Action variant="ghost">Detalhes</Server.Action>
            </Server.Actions>
          </Server.Root>
        </div>
      </PopularServersList>

      <PopularReviewsList>
        <div className="header">
          <strong>Reviews populares</strong>
          <button>Ver reviews</button>
        </div>

        <div className="servers">
          <Server.Root>
            <Server.Header
              serverName="Star Suco"
              tags={["Comunidade", "Jogos"]}
              starCount={3}
              online={3}
            />
            <Server.Review
              title="Muito bom!"
              description="
                  Lorem ipsum dolor sit amet consectetur. Feugiat risus sed
                  mattis libero tempus. Id bibendum tincidunt semper sed
                  accumsan lectus. Duis elit vulputate egestas sapien non eu
                  vitae laoreet eu. Ac feugiat commodo purus auctor sit
                "
            />
            <Server.Actions>
              <Server.Action>Entrar na comnidade</Server.Action>
              <Server.Action variant="ghost">Detalhes</Server.Action>
            </Server.Actions>
          </Server.Root>
        </div>
      </PopularReviewsList>
    </>
  );
}
