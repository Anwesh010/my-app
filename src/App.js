
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  const [modeSet, setMode] = useState('light');//wheather dark is enable is on or not
  const [alert, setAlert] = useState(null);
  const [btn,setbtn]=useState('primary')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
const clear=()=>{
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')

  }
  
  const togglemode = (cls) => {
    const btnclr=()=>{
      if(cls==='danger'){
        setbtn('success')
      }else if(cls==='primary'){
        setbtn('success')
      }else if(cls==='dark'){
        setbtn('light')
      }else{
        setbtn('dark')
      }
        }
    btnclr();
    clear();
    document.body.classList.add('bg-'+cls)
    if (modeSet === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode on", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode on", "success");
    }
    
  }
  return (
   
    <BrowserRouter>
          <Navbar title="unicraft" mode={modeSet}  togglemode={togglemode} about="About1 us" />
   <Alert/>
      <div className="container my-2">
     <Routes>
            <Route exact path="/about" element={<Aboutus />}></Route>
            <Route exact path="/" element={  <Text mode={modeSet} button={btn} alert={alert} showAlert={showAlert} heading="Input the Paragarph" />}></Route>
            </Routes>
      </div>
      </BrowserRouter>
   
    );
  }
  export default App;
   
    

    

