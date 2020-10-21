'use strict';

import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './data.json'

export const AgGrid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    let interestSelected = [];

    const isExternalFilterPresent = () => {
        return ageType !== 'everyone';
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);


        const httpRequest = new XMLHttpRequest();
        // const updateData = (data) => {
        //     document.querySelector('#everyone').checked = true;
        //     setRowData(data);
        // };

        httpRequest.open(
            'GET',
            'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
        );
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                setRowData(JSON.parse(httpRequest.responseText));
            }
        };
    };



    const externalFilterChanged = (filterType, value, bool) => {
        switch (filterType) {
            case 'interest':
                bool? interestSelected.push(value): interestSelected.filter(function(thing){ return thing != value;})
        console.log(filterType, value, bool, interestSelected)
        }
        // ageType = newValue;
        gridApi.onFilterChanged();
    };

    const ApplyInterestFilter = () => {
        gridApi.onFilterChanged();
    };

    const doesExternalFilterPass = (node) => {
        switch (ageType) {

            case 'phelps':
                return node.data['athlete'].includes('Phelps')
            default:
                return true;
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="ExternalFilters">
                {/* <button onClick={}>Apply Filter</button> */}
                {data.interests.map((value, index) => {
                    return <label  key={value+index}>
                        {value}
                        <input
                            type="checkbox"
                            name={value}
                            id={"interest"+value}
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
                    <AgGridColumn field="athlete" minWidth={180} />
                    <AgGridColumn
                        field="age"
                        filter="agNumberColumnFilter"
                        maxWidth={80}
                    />
                    <AgGridColumn field="country" />
                    <AgGridColumn field="year" maxWidth={90} />
                    <AgGridColumn
                        field="date"
                        filter="agDateColumnFilter"
                        filterParams={dateFilterParams}
                    />
                    <AgGridColumn field="gold" filter="agNumberColumnFilter" />
                    <AgGridColumn field="silver" filter="agNumberColumnFilter" />
                    <AgGridColumn field="bronze" filter="agNumberColumnFilter" />
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

