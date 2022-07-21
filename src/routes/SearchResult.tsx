import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Text, Loading, Container } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getDataWord } from '../features/search/searchSlice';

import Description from '../Components/Description';

export default function SearchResult() {
  const params = useParams();
  const { isLoading, dataWord } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataWord(params.word));
  }, []);
  return (
    <Container
      css={{
        marginTop: '1em',
        marginBottom: '1em',
        '@xsMax': { paddingLeft: '16px', paddingRight: '16px' },
      }}
    >
      <div className="defaultBar">
        <Container fluid display="flex" alignItems="center" css={{ gap: '$7' }}>
          <Text h1 margin="0 0 0.625rem 0">
            {params.word}
          </Text>
          <Link to="/" className="backLink">
            Back
          </Link>
        </Container>
        {isLoading === 'loading' ? <Loading size="lg" type="points" /> : null}
        {isLoading === 'failed' && <Navigate to="/not-found" replace />}
        {dataWord ? <Description data={dataWord[0]} /> : null}
      </div>
    </Container>
  );
}
