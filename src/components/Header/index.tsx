import Link from "next/link";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="content">
        <h3>DiscordHub</h3>

        <div>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/servers">Servidores</Link>
            <Link href="/">Meus servidores</Link>
            <Link href="/">Reviews</Link>
          </nav>

          <button>Login</button>
        </div>
      </div>
    </Container>
  );
}
