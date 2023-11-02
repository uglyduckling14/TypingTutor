import Keyboard from './components/Keyboard'; 
import Prompt from './components/Prompt';
import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [key, setKey] = useState("")
  const [isShift, setIsShift] = useState(false); 
  useEffect(() => {

    document.addEventListener("keydown", (e) => {
      //on keydown
      //if it is a shift key change values on keyboard
      //for as long as shift key is held
      //check to see if input matches current letter
      if (e.repeat) return; //  keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
      if (e.key === 'Shift') { 
          const updateShift = !isShift
          setIsShift(updateShift)
      } else {
          if(e.key == ' '){
            e.preventDefault();
          }
          setKey(e.key) 
      }
    });
    document.addEventListener("keyup", (e) => {
      //on keyup move cursor
      if (e.key === 'Shift') { 
        const updateShift = !isShift
        setIsShift(updateShift) 
      }
      setKey("")
      return;
    }
    );
    return () => {
      document.removeEventListener("keydown", []);
      document.removeEventListener("keyup", [])
    };
  })
  return (
    <div className='App'>
      <Prompt inputkey = {key}/>
      <Keyboard isshift = {isShift} inputkey = {key}/>
    </div>
  );
}

export default App
