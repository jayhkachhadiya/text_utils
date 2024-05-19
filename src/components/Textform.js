import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("clicked")
    setText(event.target.value)
  }
  const handleLoClick = () => {
    // console.log("lower case was clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    let newText = " "
    setText(newText)
  }
  const handleDownload = () => {
    const content = document.getElementById("input1").value // Replace with your actual content or fetch it from an API
    // console.log(content);
    const element = document.createElement('a');
    const file=new Blob([content],{
          type:"text/plain;charset-utf-8"
        })
    element.href = URL.createObjectURL(file);
    element.download = 'TextFile.txt'; // Specify the filename for the downloaded file
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const [text, setText] = useState("remove and write")
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control form1" id="input1" value={text} onChange={handleOnChange} rows="10" placeholder='enter text here'></textarea>
      </div>
      <button type='button' className='btn btn-primary mx-0' onClick={handleUpClick} >Convert to Uppercase</button>
      <button type='button' className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lovercase</button>
      <button type='button' className='btn btn-primary mx-0' onClick={handleClearClick}>Clear text</button>
      <button type='button' className='btn btn-primary mx-3' onClick={handleDownload}>Download Text File</button>
      <div className='container'>
        <h1 className='text-white'>your text summary</h1>
        <p className='text-white'>{text.split(" ").length} world and {text.length} charactor </p>
        <p className='text-white'>{0.008 * text.split(" ").length} minute read</p>
        <h2 className='text-white'>Preview</h2>
        <p className='text-white'>{text}</p>
      </div>
    </>
  )
}
