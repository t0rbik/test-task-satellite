import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { searchSlice } from "../features/search/searchSlice";
import { Input, Text, Button } from "@nextui-org/react";

export default function Home() {
  let [ value, setValue ] = useState("");
  let navigate = useNavigate();
  let dispatch = useAppDispatch();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(searchSlice.actions.newSearchWord(value));
    let word = value;
    setValue('');
    navigate(word);
  }
  return (
    <div className='defaultBar'>
      <Text h1>Simple dictionary</Text>
      <div className="search-input">
        <Input
        size="lg"
        bordered
        color="secondary"
        placeholder="Enter your word"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        />
        <Button size="lg" auto flat bordered color="primary" onClick={handleClick}>Search</Button>
      </div>
    </div>
  );
}
