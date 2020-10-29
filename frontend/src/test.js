
import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import data from './data.json'


export const ExternalFilter = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    // var interestSelected = ['int'];
    // var filterCol = 'test'
    let [interestSelected, setinterestSelected] = useState([]);
    let [filterCol, setfilterCol] = useState('');

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        axios
            .get('http://localhost:3003')
            .then(res => {
                console.log(res.data)
                setRowData(res.data.rows)
            });
    };

    const externalFilterChanged = (filterType, value, bool, newValue) => {
        ageType = newValue;
        switch (filterType) {
            case 'interest':
                if (bool) {
                    interestSelected.push(value)
                } else {
                    interestSelected = interestSelected.filter(function (thing) {
                        return thing != value;
                    })
                }
            default:


        }
        console.log(filterCol, interestSelected)
        gridApi.onFilterChanged();
    };

    const isExternalFilterPresent = () => {
        return true
    };

    const test = () => {
        console.log(filterCol)
        console.log('test')

    };

    const doesExternalFilterPass = (node) => {
        test();
        console.log(filterCol, interestSelected)
        // for (let i in interestSelected) {

        //     if (node.data[filterCol].includes(interestSelected[i])) continue
        //     return false;
        // }us
        // return true;


        
    };

    const ApplyInterestFilter = (filter) => {
        setfilterCol(filter)
        console.log(filterCol)
        console.log(filter)
        console.log(interestSelected)
        gridApi.onFilterChanged();
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
             <button onClick={e => test('interest')}>Apply Filter</button>
            <div className="ExternalFilters">
                <button onClick={e => ApplyInterestFilter('interest')}>Apply Filter</button>
                {data.interests.map((value, index) => {
                    return <label key={value + index}>
                        {value}
                        <input
                            type="checkbox"
                            name={value}
                            id={"interest" + value}
                            value={false}
                            onChange={e => externalFilterChanged("interest", value, e.target.checked)}
                        />
                    </label>
                }
                )}

            </div>
            <div
                id="myGrid"
                style={{
                    height: '700px',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 120,
                        filter: true,
                    }}
                    animateRows={true}
                    isExternalFilterPresent={isExternalFilterPresent}
                    doesExternalFilterPass={doesExternalFilterPass}
                    onGridReady={onGridReady}
                    rowData={rowData}
                >
                    <AgGridColumn field="interests" minWidth={180} />

                </AgGridReact>
            </div>
        </div>
    );
};

var dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
        var cellDate = asDate(cellValue);
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
    },
};

var ageType = 'everyone';
function asDate(dateAsString) {
    var splitFields = dateAsString.split('/');
    return new Date(splitFields[2], splitFields[1], splitFields[0]);
}

