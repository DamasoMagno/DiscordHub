"use client";
import { XCircle } from "phosphor-react";

import { Search } from "@/components/Search";
import { Header } from "@/components/Header";
import { ServerList } from "@/components/ServerList";

import { Content, Filters, SectionTitle } from "@/styles/Servers";

export default function Servers() {
  return (
    <>
      <Header />

      <Filters>
        <div className="filters">
          <Search />
          <Search />
        </div>

        <ul className="tags">
          <li>
            Comunidade
            <button>
              <XCircle />
            </button>
          </li>
        </ul>
      </Filters>

      <Content>
        <ServerList type="server" count={12}>
          <SectionTitle>
            <strong>Comunidades populares</strong>
            <button>Hllo</button>
          </SectionTitle>
        </ServerList>
      </Content>
    </>
  );
}
