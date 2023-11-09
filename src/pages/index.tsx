"use client";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";

import { Header } from "@/components/Header";
import { Server } from "@/components/Server";

import { Hero, PopularServersList, PopularReviewsList } from "@/styles/Home";

const popularTags = ["Comunidade", "Jogos", "Amizade", "Programação"];

export default function Home() {
  return (
    <>
      <Hero>
        <h1>DiscordHub, aqui você encontra a comunidade perfeita para ti.</h1>

        <div className="search">
          <input placeholder="Busque servidores" />
          <MagnifyingGlass />
        </div>

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
              tags={["Comunidade"]}
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
          <strong>Comunidades populares</strong>
          <button>Ver reviews</button>
        </div>

        <div className="servers">
          <Server.Root>
            <Server.Header
              serverName="Star Suco"
              tags={["Comunidade"]}
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
