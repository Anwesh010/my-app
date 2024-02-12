import React from 'react'
import { useState } from "react";

export default function Text(props) {
    const [text, setText] = useState('')
    //altercase

    const handlealterclick = () => {
        let index = 0;
        var styledWord = '';
        for (let i = 0; i < text.length; i++) {
            let letter = text[i]
            if (index % 2 === 0) {
                styledWord += letter.toUpperCase();
            } else {
                styledWord += letter.toLowerCase();
            }
            index++;
        }
        setText(styledWord)
    }
    //handle uppercase
    const handleDownclick = () => {
        let low = text.toLowerCase();
        setText(low);
        props.showAlert('converted to Lowercase','success');
    }
    //handle lowercase
    const handleUpclick = () => {
        let up = text.toUpperCase();
        setText(up)
        props.showAlert('converted to Uppercase','success');
    }
    //handle clear
    const handleclearclick = () => {
setText("")
props.showAlert('text cleared','warning');
}
//handle undo
    const handleundoclick = () => {
        const words= text.split(" ");
        var otherWords = words.slice(0, -1);
        var result = otherWords.join(" ");
setText(result)
}
    const handleredoclick = () => {
      let copy=document.getElementById("exampleFormControlTextarea1")
      copy.select();
      navigator.clipboard.writeText(copy.value)
}
    const handleOnchange = (event) => {
        console.log('on change');
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className={`btn btn-${props.button} mx-3`} onClick={handleUpclick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.button} mx-3`} onClick={handleDownclick}>Convert to Lowerrcase</button>
                <button className={`btn btn-${props.button} mx-3`} onClick={handlealterclick}>Convert to aLtErCaSe</button>
                <button className={`btn btn-${props.button} mx-3`} onClick={handleundoclick}>Undo</button>
                <button className={`btn btn-${props.button} mx-3`} onClick={handleredoclick}>Copy</button>
                <button className={`btn btn-${props.button} mx-3`} onClick={handleclearclick}>clear</button>
            </div>
            <div className='container my-5'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} mintues to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'enter something in textbox'}</p>
            </div>
        </>
    )
}