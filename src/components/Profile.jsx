import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <main>
      <Container className="my-4">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Mi perfil</Card.Title>
            <p className="mb-0">Email: <strong>{user?.email}</strong></p>
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}
