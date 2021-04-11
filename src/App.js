import React, { createContext ,useState} from 'react'
import './App.css';
import CompA from './Components/CompA';
import CompB from './Components/CompB';

const Number = createContext();
const ChangeNum = createContext();
function App() {

  function IncNum(){
    setnumber(number+1)
  }
  const [number, setnumber] = useState(1)
  return (
    <div className="App">
    <Number.Provider value={number}>
    <ChangeNum.Provider value={IncNum}>
    <CompA/>
    </ChangeNum.Provider>
    </Number.Provider>
    </div>
  );
}

export default App;
export  {Number,ChangeNum}