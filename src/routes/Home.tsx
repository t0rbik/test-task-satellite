import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { searchSlice } from "../features/search/searchSlice";

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
      <h1>Simple dictionary</h1>
      <div className="search-input">
          <input className="search-input_element" type='text' id='search-input' placeholder="Enter your word" value={value} onChange={e => setValue(e.currentTarget.value)}/>
          <button className="search-input_button" type='submit' onClick={handleClick}>
            Search
          </button>
      </div>
    </div>
  );
}
