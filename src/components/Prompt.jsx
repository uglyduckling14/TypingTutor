import { useEffect, useState } from "react";
import './Prompt.css';

export default function Prompt(props){
    const prompts = ["To be or not to be, that is the question.", 
                    "The sun is shining, and the birds are singing.",
                    "The only thing necessary for the triumph of evil is for good men to do nothing.",
                    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
                    "In the end, we will remember not the words of our enemies, but the silence of our friends"]
    
    const [curPrompt, setPrompt]= useState(0);
    const key = props.inputkey;
    const [pointer, setPointer] = useState("");
    const [written, setWritten] = useState("");
    const [unWritten, setUnwritten] = useState(prompts[curPrompt]);
    const [curIndex, setIndex] = useState(-1);
    console.log(curIndex);
    useEffect(() => {
        if(pointer == key && curIndex < prompts[curPrompt].length){
            let newUnwritten = prompts[curPrompt];
            setPointer(newUnwritten.slice(curIndex+1,curIndex+2));
            newUnwritten = newUnwritten.slice(curIndex+2);
            setWritten(prompts[curPrompt].slice(0, curIndex+1))
            setUnwritten(newUnwritten);
            let tempIndex = curIndex+1;
            setIndex(tempIndex);
        }else if(pointer == key && curIndex == prompts[curPrompt].length){
            setIndex(0);
            let temp = curPrompt+1
            setPrompt(temp);
            setWritten("");
            setUnwritten(prompts[temp]);
        }
    }, [key])

return (
    <div className = 'prompt'>
        <span className = "typed-phrase">{written}</span>
        <span className = "pointer">{pointer}</span> {/* where use left off*/}
        {unWritten}
        {/*rest of phrase goes here*/}
    </div>
    )
}