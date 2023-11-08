import { MagnifyingGlass, CheckSquare } from "phosphor-react";

import { Header } from "@/components/Header";

import { Hero, ServerList } from "@/styles/Servers";
import { Server } from "@/components/Server";

export default function Servers() {
  return (
    <>
      <Header />

      <Hero>
        <div className="search">
          <input placeholder="Busque servidores" />
          <MagnifyingGlass />
        </div>

        <div className="search">
          <input placeholder="Busque servidores" />
          <CheckSquare />
        </div>
      </Hero>

      <ServerList>
        <header>
          <strong>Comunidades populares</strong>
        </header>

        <div className="servers"></div>
      </ServerList>
    </>
  );
}
