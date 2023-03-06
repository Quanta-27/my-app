import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
function App() {
  const toggleMode =()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  const [mode, setMode] = useState('light');//whether dark mode enabled or not
  return (
    <>
    <Navbar title="TextUtils" about ="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3"><TextForm heading="Enter the text to analyze" mode={mode}/></div>
    </>
  );
}

export default App;
