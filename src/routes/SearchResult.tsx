import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
        <Text h1>{params.word}</Text>
        {isLoading === 'loading' ? <Loading size="lg" type="points" /> : null}
        {isLoading === 'failed' && <Navigate to="/not-found" replace />}
        {dataWord ? <Description data={dataWord[0]} /> : null}
      </div>
    </Container>
  );
}
