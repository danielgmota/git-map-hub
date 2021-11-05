import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <h2>GitMapHub</h2>
      <p>
        <Link to="/">Home</Link>
        <Link to="/repos/favoritos">Repo favoritos</Link>
      </p>
    </Container>
  );
}
