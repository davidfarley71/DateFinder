import React, { useState } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap'

function App() {
  let [gender, setGender] = useState(null)

  const handleChange = function () {

  }

  return (
    <div className="App">
      <h1>Search for personalities</h1>
      <label htmlFor="gender">Gender</label>
      <div>
        <input type="checkbox"></input>
      {/* <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
           
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Radio button for following text input" />
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with radio button" />
        </InputGroup> */}
      </div>
    </div>
  );
}

export default App;

