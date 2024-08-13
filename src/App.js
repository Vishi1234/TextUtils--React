import { useState } from 'react';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Thisnav';


function App() {

  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('red');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
  
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      
    }
  }

  const toggleMode1 = () => {
    if (mode1 === 'red') {
      setMode1('red');
      document.body.style.backgroundColor='red';
    }
    else {
      setMode1('dark');
      document.body.style.backgroundColor='white';
      console.log(mode1)
    }
    
  }
  
  return (
    <>
        <Navbar title="TextUtils" mode={mode}  mode1={mode1} toggleMode={toggleMode} toggleMode1={toggleMode1} />
        <div className='container my-3' >
           <Textform heading="Enter the text below" button1="Convert to UpperCase"  button2="Convert to LowerCase" button3="Clear Text" button4="Enable Dark Mode" button5="Copy to Clipboard" mode={mode}/>
        </div>
    </>
       
       


      
    
  )
}

export default App;
