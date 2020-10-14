import React, { useState } from 'react';
import { Form, Container, InputGroup, FormControl } from 'react-bootstrap'
import axios from "axios";
// import ReactTable from "react-table";
// import {matchSorter} from 'match-sorter'
// import { useTable } from 'react-table'

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

  let [male, setmale] = useState(false)
  let [female, setfemale] = useState(false)
  let [othergender, setothergender] = useState(false)
  let [ageStart, setAgeStart] = useState(0)
  let [ageEnd, setAgeEnd] = useState(99)
  let [I, setI] = useState(false)
  let [E, setE] = useState(false)
  let [S, setS] = useState(false)
  let [N, setN] = useState(false)
  let [T, setT] = useState(false)
  let [F, setF] = useState(false)
  let [J, setJ] = useState(false)
  let [P, setP] = useState(false)
  let [EP, setEP] = useState('')
  let [EW1, setEW1] = useState('')
  let [EW2, setEW2] = useState('')
  //todo
  const noAgeoverlap = function () {
    // add logic so the ages dont overlap when updated.
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
          <label htmlFor="ageStart">From</label>
          <input id='ageStart' value={ageStart} onChange={e => setAgeStart(e.target.value)} type="number"></input>
          <label htmlFor="ageEnd">To</label>
          <input id='ageEnd' value={ageEnd} onChange={e => setAgeEnd(e.target.value)} type="number"></input>
        </div>
        <div className="questionBox">
          {/* todo add pop ups with links to learn more about the meyers brigs stuff */}
          <h2>Meyers Brigs</h2>
          <label htmlFor="I">I</label>
          <input id='I' value={I} onChange={e => setI(!I)} type="checkbox"></input>
          <label htmlFor="E">E</label>
          <input id='E' value={E} onChange={e => setE(!E)} type="checkbox"></input>
          <label htmlFor="S">S</label>
          <input id='S' value={S} onChange={e => setS(!S)} type="checkbox"></input>
          <label htmlFor="N">I</label>
          <input id='N' value={N} onChange={e => setN(!N)} type="checkbox"></input>
          <label htmlFor="F">F</label>
          <input id='F' value={F} onChange={e => setF(!F)} type="checkbox"></input>
          <label htmlFor="T">T</label>
          <input id='T' value={T} onChange={e => setT(!T)} type="checkbox"></input>
          <label htmlFor="P">P</label>
          <input id='P' value={P} onChange={e => setP(!P)} type="checkbox"></input>
          <label htmlFor="J">J</label>
          <input id='J' value={J} onChange={e => setJ(!J)} type="checkbox"></input>
        </div>
        <div className="questionBox">
          <h2>Eneagram</h2>
          <label htmlFor="EP">Eneagram Primary</label>
          <input id='EP' value={EP} onChange={e => setEP(e.target.value)} type="number"
            onInput={e => {
              if (e.target.value > 9) e.target.value = 9;
              if (e.target.value < 1) e.target.value = '';
            }}
            min="1" max="9" ></input>
          <label htmlFor="EW1">Eneagram Wing 1</label>
          <input id='EW1' value={EW1} onChange={e => setEW1(e.target.value)} type="number" onInput={e => {
            if (e.target.value > 9) e.target.value = 9;
            if (e.target.value < 1) e.target.value = '';
          }} min="1" max="9" ></input>
          <label htmlFor="EW2">Eneagram Wing 2</label>
          <input id='EW2' value={EW2} onChange={e => setEW2(e.target.value)} type="number" onInput={e => {
            if (e.target.value > 9) e.target.value = 9;
            if (e.target.value < 1) e.target.value = '';
          }} min="1" max="9"></input>
        </div>

        <button onClick={search}>test</button>


        <div className="reacttablecontainer">
          {/* <ReactTable
            data={search}
            filterable
            columns={[
              {
                columns: [
                  {
                    Header: "Title",
                    accessor: "Title",
                    minWidth: 300,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["Title"] }),
                    filterAll: true
                  },
                  {
                    Header: "Author",
                    accessor: "Author",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["Author"] }),
                    filterAll: true
                  },
                ]
              }
            ]}
            defaultPageSize={50}
            className="-striped -highlight"
            style={{
              height: "780px" // This will force the table body to overflow and scroll, since there is not enough room
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}



//  function table() {
//    const data =
//      () => {return [
//        {
//          col1: 'Hello',
//          col2: 'World',
//        },
//        {
//          col1: 'react-table',
//          col2: 'rocks',
//        },
//        {
//          col1: 'whatever',
//          col2: 'you want',
//        },
//      ],
//      []
//     }
 
//    const columns =
//      () =>{ return[
//        {
//          Header: 'Column 1',
//          accessor: 'col1', // accessor is the "key" in the data
//        },
//        {
//          Header: 'Column 2',
//          accessor: 'col2',
//        },
//      ],
//      []}
   
 
//    const {
//      getTableProps,
//      getTableBodyProps,
//      headerGroups,
//      rows,
//      prepareRow,
//    } = useTable({ columns, data })
 
//    return (
//      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
//        <thead>
//          {headerGroups.map(headerGroup => (
//            <tr {...headerGroup.getHeaderGroupProps()}>
//              {headerGroup.headers.map(column => (
//                <th
//                  {...column.getHeaderProps()}
//                  style={{
//                    borderBottom: 'solid 3px red',
//                    background: 'aliceblue',
//                    color: 'black',
//                    fontWeight: 'bold',
//                  }}
//                >
//                  {column.render('Header')}
//                </th>
//              ))}
//            </tr>
//          ))}
//        </thead>
//        <tbody {...getTableBodyProps()}>
//          {rows.map(row => {
//            prepareRow(row)
//            return (
//              <tr {...row.getRowProps()}>
//                {row.cells.map(cell => {
//                  return (
//                    <td
//                      {...cell.getCellProps()}
//                      style={{
//                        padding: '10px',
//                        border: 'solid 1px gray',
//                        background: 'papayawhip',
//                      }}
//                    >
//                      {cell.render('Cell')}
//                    </td>
//                  )
//                })}
//              </tr>
//            )
//          })}
//        </tbody>
//      </table>
//    )
//  }