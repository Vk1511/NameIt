import './App.css';
import Head from './Components/Head/Head'
import CardCon from './Components/CardCon/CardCon'
import React, {useState,useEffect} from 'react';

function App() {

  useEffect(() => {
    alert("Click The Name To Buy Domain!")
  }, []) 

  const name = require('@rstacruz/startup-name-generator')
  const [title] = useState("Name It!!");
  const [ndata, setnData] = useState([]);
  const [headclass , setHeadclass] = useState(true)

  const handleInput = (data) => {
    data ? setHeadclass(false) : setHeadclass(true)
    data ? setnData(name(data)) : setnData([])
  }

  return (
    <div>
      <Head title={title} handleInput={handleInput} headclass={headclass}/>
      <CardCon data={ndata}/>
    </div>
  );
}

export default App;
