import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Text, Button } from '@nextui-org/react';
import { useAppDispatch } from '../app/hooks';
import { searchSlice } from '../features/search/searchSlice';

export default function Home() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(searchSlice.actions.newSearchWord(value));
    const word = value;
    setValue('');
    navigate(word);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return (
    <div className="defaultBar">
      <Text h1>Simple dictionary</Text>
      <div className="search-input">
        <Input
          size="lg"
          bordered
          color="secondary"
          placeholder="Enter your word"
          value={value}
          onChange={handleChange}
        />
        <Button size="lg" auto flat bordered color="primary" onClick={handleClick}>
          Search
        </Button>
      </div>
    </div>
  );
}
