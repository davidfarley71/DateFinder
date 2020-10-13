import React, { useState } from 'react';
import { Container , InputGroup, FormControl } from 'react-bootstrap'

function App() {
  let [male, setmale] = useState(false)
  let [female, setfemale] = useState(false)
  let [othergender, setothergender] = useState(false)
  let [ageStart, setAgeStart] = useState(0)
  let [ageEnd, setAgeEnd] = useState('')
  const handleChange = function () {
    console.log(male)
  }

  return (
    <div className="App">
      <h1>Search for personalities</h1>
      <div>
        <div className="questionBox">
          <h2>Gender</h2>
          <label htmlFor="male" >Male</label>
          <input id='male' value={male} onChange={e => setmale(!male)} type="checkbox"></input>
          <label htmlFor="female">Female</label>
          <input id='female' value={female} onChange={e => setfemale(!female)} type="checkbox"></input>
          <label htmlFor="othergender">Other</label>
          <input id='othergender' value={othergender} onChange={e => setothergender(!othergender)} type="checkbox"></input>
        </div>
        <div className="questionBox">
          <h2>Age</h2>
          <label htmlFor="male">From</label>
          <input id='ageStart' value={ageStart} onChange={e => setAgeStart(e.target.value)} type="number"></input>
          <label htmlFor="female">To</label>
          <input id='ageEnd' value={ageEnd} onChange={e => setAgeEnd(e.target.value)} type="number"></input>
        </div>


        <Container>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <label htmlFor="basic-url">Your vanity URL</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://example.com/users/
      </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>With textarea</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </div>

        </Container>
      </div>
    </div>
  );
}

export default App;

