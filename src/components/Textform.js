import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpButton = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
    }

    const handleLowButton = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    
    const handleClearButton = () => {
        let newtext = ""
        settext(newtext)
    }

    const handleCopyButton = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        settext(event.target.value)

    }

    function countParagraphs(text) {
        text = text.trim();
        const paragraphs = text.split(/\n\s*\n/);
        const nonEmptyParagraphs = paragraphs.filter(paragraph => paragraph.trim() !== '');
        return nonEmptyParagraphs.length;
    }

    const [text,settext] = useState("Enter text here...");
    const textAreaRef= null;

   
    
    return (
    <>

    <div className='container' style={{color: props.mode==='light' ? 'black' : 'white'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3" >
          <textarea ref={textAreaRef} className="form-control " value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="10"></textarea>
       </div>

       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpButton}>{props.button1}</button>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowButton}>{props.button2}</button>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearButton}>{props.button3}</button>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyButton}>{props.button5}</button>
       
    </div>
    <div className='container my-3' style={{color: props.mode==='light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <div className="container text-center">
            <div className="row row-cols-2 border">
                <div className="col  border">TOTAL WORDS</div>
                <div className="col  border">{text.trim() === '' ? 0 : text.split(" ").filter(Boolean).length} words</div>
                <div className="col  border">TOTAL CHARACTERS</div>
                <div className="col  border">{text.replace(/\s+/g, '').length} characters</div>
                <div className="col  border">TOTAL PARAGRAPHS</div>
                <div className="col  border">{countParagraphs(text)} paragraphs</div>

            </div>
        </div>
        
        
    </div>
    </>
    
  )
}


