import React, { useEffect, useState } from 'react'; 
import './Keyboard.css'; 

export default function Keyboard(props) { 
    const [inputText, setInputText] = useState(''); 
    const [isCaps] = useState(false); 
    const isShift = props.isshift;
    const key = props.inputkey;

    const handleRegularKey = (inputKey) => { 
        let newContent; 
        let character = ((isShift && isCaps) || (!isShift && !isCaps))  
        ? inputKey.toLowerCase() : inputKey.toUpperCase(); 
        newContent = inputText + character; 
        console.log(isShift)
        setInputText(newContent); 
    };

    useEffect(()=>{
        if(key != undefined){
            handleRegularKey(key);
        }
    }, [key, isShift, isCaps ])  

    
    return ( 
        <div className='keyboard'> 
            <div className="textcontainer"> 
                <pre>{inputText}</pre> 
            </div> 
            <div className="keyboardcontainer"> 
                <div className="container"> 
                    <div className="row"> 
                        {['~.`', '!.1', '@.2', '#.3', '$.4', '%.5',  
                        '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.='] 
                        .map((keyvalue) =>  
                        ( 
                            <div key={keyvalue} className='key' > 
                                {keyvalue.includes('.') ? ( 
                                    keyvalue.split('.').map((part, index) => ( 
                                        <span key={index}>{part}</span> 
                                    )) 
                                ):(
                                    <span>{keyvalue}</span>
                                )}
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['q', 'w', 'e', 'r', 't', 'y', 
                        'u', 'i', 'o', 'p', '{_[', '}_]', '|_\\'] 
                        .map((keyvalue) => ( 
                            <div key={keyvalue} className='key'> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => ( 
                                        <span key={index}>{part}</span> 
                                    )) 
                                ) : ( 
                                    <span>{keyvalue}</span> 
                                )} 
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['a', 's', 'd', 'f', 'g', 'h',  
                        'j', 'k', 'l', ':_;', `"_'`] 
                            .map((keyvalue) => ( 
                            <div key={keyvalue} className='key'> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => ( 
                                        <span key={index}>{part}</span> 
                                    )) 
                                ) : ( 
                                    <span>{keyvalue}</span> 
                                )} 
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 
                        '<_,', '>_.', '?_/', 'Shift'].map((keyvalue, index) => ( 
                            <div key={index} className='key' style={{ background: isShift && keyvalue.includes('Shift') ? 'blue' : '#445760' }}> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => ( 
                                        <span key={index}>{part}</span> 
                                    )) 
                                ) : (<span key = {index}>{keyvalue}</span>)
                                }
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {[' '] 
                            .map((keyvalue, index) => ( 
                            <div key={index} className='key'> 
                                <span>{keyvalue}</span> 
                            </div> 
                        ))} 
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 