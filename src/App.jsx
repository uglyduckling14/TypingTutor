import Keyboard from './components/Keyboard'; 
import Prompt from './components/Prompt';
import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const prompts = ["To be or not to be, that is the question.", 
                    "The sun is shining, and the birds are singing.",
                    "The only thing necessary for the triumph of evil is for good men to do nothing.",
                    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
                    "In the end, we will remember not the words of our enemies, but the silence of our friends"]
    
  const [curPrompt, setPrompt]= useState(0);
  const [key, setKey] = useState("")
  const [written, setWritten] = useState("");
  const [unWritten, setUnwritten] = useState(prompts[curPrompt].slice(1));
  const [curIndex, setIndex] = useState(0);
  const [isShift, setIsShift] = useState(false);
  const [pointer, setPointer] = useState(prompts[curPrompt].slice(0,1));

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
      const key = e.key;

      if((pointer == key && curIndex < prompts[curPrompt].length-1)){
        let newUnwritten = prompts[curPrompt];
        setPointer(newUnwritten.slice(curIndex+1,curIndex+2));
  
        newUnwritten = newUnwritten.slice(curIndex+2);
        setWritten(prompts[curPrompt].slice(0, curIndex+1))
  
        setUnwritten(newUnwritten);
  
        let tempIndex = curIndex+1;
        setIndex(tempIndex);
    }else if(pointer == key && curIndex == prompts[curPrompt].length-1){
        setIndex(0);
        let temp = curPrompt+1
        setPrompt(temp);
        setWritten("");
        setUnwritten(prompts[temp].slice(1));
        setPointer(prompts[temp].slice(0,1))
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
      <Prompt written = {written} pointer = {pointer} unWritten = {unWritten}/>
      <Keyboard isshift = {isShift} inputkey = {key} pointer = {pointer}/>
    </div>
  );
}

export default App
