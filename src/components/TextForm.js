import React , {useState} from 'react'
export default function TextForm(props) {
   const handleUpClick=()=>{
      console.log("onclick");
      let newText = text.toUpperCase();
      setText(newText);
   }
   const handleLowClick=()=>{
      console.log("onclick");
      let newText = text.toLowerCase();
      setText(newText);
   }
   const handleClear=()=>{
      setText("");
   }
   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    };
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    };
   const handleOnChange=(event)=>{
      console.log("onchange");
      setText(event.target.value);
   }
   const [text,setText] = useState('Enter Text Here');
  return (
   <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange}   style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'grey'}}   id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
     </div>
     <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h3>Your Text Summary</h3>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read</p>
          <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something above to see the preview here"}</p>
     </div>
     </>
  )
}
