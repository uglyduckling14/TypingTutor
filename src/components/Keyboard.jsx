import React, { useEffect, useState } from 'react'; 
import './Keyboard.css'; 

export default function Keyboard(props) { 
    const [inputText, setInputText] = useState(''); 
    const isShift = props.isshift;
    const key = props.inputkey;

    const handleRegularKey = (inputKey) => { 
        let newContent; 
        let character = ((!isShift))  
        ? inputKey.toLowerCase() : inputKey.toUpperCase();
        newContent = inputText + character; 
        setInputText(newContent); 
    };

    useEffect(()=>{
        if(key != undefined){
            handleRegularKey(key);
        }
    }, [key, isShift])  
    const compareKey = (inputKey, split) => {
        if(inputKey.includes(split)){
            const keys = inputKey.split(split)
            return keys[0] == key || keys[1] == key ? "selected": "unselected"
        }
        return inputKey == key ? "selected":"unselected"
    }
    
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
                            <div key={keyvalue} className='key' sel = {compareKey(keyvalue, '.')}> 
                                {keyvalue.includes('.') ? ( 
                                    keyvalue.split('.').map((part, index) => ( 
                                        (index != 0 && !isShift) ? (
                                            <span key={index}>{part}</span>):
                                                (index == 0 && isShift) ?
                                                <span key={index}>{part}</span>:
                                                <span key= {index}>{isShift}</span>
                                    )) 
                                ):(
                                    <span>{keyvalue}</span>
                                )}
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['Q_q', 'W_w', 'E_e', 'R_r', 'T_t', 'Y_y', 
                        'U_u', 'I_i', 'O_o', 'P_p', '{_[', '}_]', '|_\\'] 
                        .map((keyvalue) => ( 
                            <div key={keyvalue} className='key' sel = {compareKey(keyvalue, '_')}> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => (
                                        (index != 0 && !isShift) ? (
                                        <span key={index}>{part}</span>):
                                            (index == 0 && isShift) ?
                                            <span key={index}>{part}</span>:
                                            <span key= {index}>{isShift}</span>
                                    )) 
                                ) : ( 
                                    <span>{keyvalue}</span> 
                                )} 
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['A_a', 'S_s', 'D_d', 'F_f', 'G_g', 'H_h',  
                        'J_j', 'K_k', 'L_l', ':_;', `"_'`] 
                            .map((keyvalue) => ( 
                            <div key={keyvalue} className='key' sel = {compareKey(keyvalue,'_')}> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => ( 
                                        (index != 0 && !isShift) ? (
                                            <span key={index}>{part}</span>):
                                                (index == 0 && isShift) ?
                                                <span key={index}>{part}</span>:
                                                <span key= {index}>{isShift}</span>
                                    )) 
                                ) : ( 
                                    <span>{keyvalue}</span> 
                                )} 
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {['Shift', 'Z_z', 'X_x', 'C_c', 'V_v', 'B_b', 'N_n', 'M_m', 
                        '<_,', '>_.', '?_/', 'Shift'].map((keyvalue, index) => ( 
                            <div key={index} className='key' isshift = {(isShift && keyvalue.includes('Shift'))?isShift.toString(): "false"} sel = {compareKey(keyvalue, '_')}> 
                                {keyvalue.includes('_') ? ( 
                                    keyvalue.split('_').map((part, index) => ( 
                                        (index != 0 && !isShift) ? (
                                            <span key={index}>{part}</span>):
                                                (index == 0 && isShift) ?
                                                <span key={index}>{part}</span>:
                                                <span key= {index}>{isShift}</span>
                                    )) 
                                ) : (<span key = {index}>{keyvalue}</span>)
                                }
                            </div> 
                        ))} 
                    </div> 
                    <div className="row"> 
                        {[' '] 
                            .map((keyvalue, index) => ( 
                            <div key={index} className='key' sel = {compareKey(keyvalue, null)}> 
                                <span>{keyvalue}</span> 
                            </div> 
                        ))} 
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 