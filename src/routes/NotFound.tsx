import { useNavigate } from 'react-router-dom';
import { Text, Button, Container } from '@nextui-org/react';
import { useAppDispatch } from '../app/hooks';
import { searchSlice } from '../features/search/searchSlice';

export default function NotFound() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
            dispatch(searchSlice.actions.restoreIninitalState());
            navigate('/');
          }}
        >
          Go back
        </Button>
      </div>
    </Container>
  );
}
