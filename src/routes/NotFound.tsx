import { useNavigate } from 'react-router-dom';
import { Text, Button, Container } from '@nextui-org/react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="defaultBar">
        <Text h2>Your word is not found. Try again.</Text>
        <Button
          size="lg"
          auto
          light
          color="secondary"
          onClick={() => {
            navigate('/');
          }}
        >
          Go back
        </Button>
      </div>
    </Container>
  );
}
