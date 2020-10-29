import React, { useState } from 'react';
import { Form, Container, InputGroup, FormControl } from 'react-bootstrap'
import axios from "axios";
import { AgGrid } from './AgGrid'
import { ExternalFilter } from './test'
export default App;

function App() {

  const search = () => {
    axios
      .get('http://localhost:3003')
      .then(res => {
        console.log(res.data)
        // this.setState({reactTablerows: res.data});
        console.log('got books');
        return res.data
      });
  };

  // let [male, setmale] = useState(false)
  // let [female, setfemale] = useState(false)
  // let [othergender, setothergender] = useState(false)
  // let [ageStart, setAgeStart] = useState(0)
  // let [ageEnd, setAgeEnd] = useState(99)
  // let [I, setI] = useState(false)
  // let [E, setE] = useState(false)
  // let [S, setS] = useState(false)
  // let [N, setN] = useState(false)
  // let [T, setT] = useState(false)
  // let [F, setF] = useState(false)
  // let [J, setJ] = useState(false)
  // let [P, setP] = useState(false)
  // let [EP, setEP] = useState('')
  // let [EW1, setEW1] = useState('')
  // let [EW2, setEW2] = useState('')


  return (
    <div className="App">
      <h1>Search for personalities</h1>
      <AgGrid />
      {/* <ExternalFilter/> */}

    </div>
  );
}

