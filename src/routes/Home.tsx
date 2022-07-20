import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Text, Button, FormElement } from '@nextui-org/react';
import { useAppDispatch } from '../app/hooks';
import { searchSlice } from '../features/search/searchSlice';

export default function Home() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleEnterDown(e: KeyboardEvent) {
      if (e.code === 'Enter' && value.length > 0) {
        dispatch(searchSlice.actions.newSearchWord(value));
        const word = value;
        setValue('');
        navigate(word);
      }
    }
    document.addEventListener('keydown', handleEnterDown);
    return () => document.removeEventListener('keydown', handleEnterDown);
  });

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      dispatch(searchSlice.actions.newSearchWord(value));
      const word = value;
      setValue('');
      navigate(word);
    },
    [value],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<FormElement>) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );
  return (
    <Container>
      <div className="defaultBar">
        <Text h1>Simple dictionary</Text>
        <div className="search-input">
          <Input
            size="lg"
            bordered
            color="secondary"
            placeholder="Search"
            value={value}
            onChange={handleChange}
          />
          <Button size="lg" auto flat bordered color="primary" onClick={handleClick}>
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
}
