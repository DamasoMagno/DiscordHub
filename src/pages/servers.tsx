"use client"
import { MagnifyingGlass, CheckSquare } from "phosphor-react";


import { Hero, ServerList } from "@/styles/Servers";

export default function Servers() {
  return (
    <>
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
