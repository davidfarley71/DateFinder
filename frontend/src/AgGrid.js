'use strict';

import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './data.json'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export const AgGrid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isExternalFilterPresent = () => {
        if (interestSelected.length == 0) {
            return false

        } else return true
    };

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

    const externalFilterChanged = (filterType, value, bool) => {
        //here temp is because you get weird scoping issues outside of this function if you change interestSeelected inside of the switch. 
        //im able to get around it by changing something else in the switch and then assigning interestSelected to that afterward. Took a very long time to debug.
        let temp = [];
        for (var i = 0, l = bool.length; i < l; i++) {
            if (bool[i].selected) {
                temp.push(bool[i].value);
            }
        }
        console.log(temp)
        interestSelected = temp;

        console.log(interestSelected)
    };


    const ApplyInterestFilter = (filter) => {
        filterCol = filter;
        gridApi.onFilterChanged();
    };

    function doesExternalFilterPass(node) {
        // console.log(node.data)
        // console.log(node.data[filterCol])

        for (let i in interestSelected) {
            if (node.data[filterCol].includes(interestSelected[i]))
                return true;
        }
        return false;
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="ExternalFilters">
                <button onClick={e => ApplyInterestFilter('interests')}>Apply Filter</button>
                <select multiple={true} onChange={e => externalFilterChanged("interest", true, e.target.options)}>

                    {data.interests.map((mapvalue, index) => {
                        return <option key={mapvalue + index} value={mapvalue}>{mapvalue}</option>
                    }
                    )}
                </select>

                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}
                <Button variant="primary" onClick={() => setShow(true)}>
                    Custom Width Modal
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                  
                   
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    </Modal.Body>
                </Modal>
                {/* <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      
                          <button onClick={e => ApplyInterestFilter()}>Apply Filter</button>
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
                })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
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
                        filter: true,
                        resizable: true

                    }}
                    animateRows={true}
                    isExternalFilterPresent={isExternalFilterPresent}
                    doesExternalFilterPass={doesExternalFilterPass}
                    onGridReady={onGridReady}
                    rowData={rowData}
                    pagination={true}
                >
                    <AgGridColumn sortable={true} field="userid" />
                    <AgGridColumn sortable={true} field="gender" />
                    <AgGridColumn sortable={true} field="age" />
                    <AgGridColumn sortable={true} minWidth={180} field="interests" />
                    <AgGridColumn sortable={true} field="mbti" />
                    <AgGridColumn sortable={true} field="eneagram" />
                    <AgGridColumn sortable={true} field="wing1" />
                    <AgGridColumn sortable={true} field="wing2" />
                    <AgGridColumn sortable={true} field="o5" />
                    <AgGridColumn sortable={true} field="c5" />
                    <AgGridColumn sortable={true} field="e5" />
                    <AgGridColumn sortable={true} field="a5" />
                    <AgGridColumn sortable={true} field="n5" />
                    <AgGridColumn sortable={true} field="zodiac" />
                    <AgGridColumn sortable={true} field="education" />
                    <AgGridColumn sortable={true} field="career" />
                    <AgGridColumn sortable={true} field="iq" />
                    <AgGridColumn sortable={true} field="state" />
                    <AgGridColumn sortable={true} field="city" />
                    <AgGridColumn sortable={true} field="politics" />
                    <AgGridColumn sortable={true} field="religion" />
                    <AgGridColumn sortable={true} field="sexualorientation" />
                    <AgGridColumn sortable={true} field="contactgender" />
                    <AgGridColumn sortable={true} field="contactage" />
                    <AgGridColumn sortable={true} field="contactmbti" />
                    <AgGridColumn sortable={true} field="contactinterests" />
                    <AgGridColumn sortable={true} field="contacteneagram" />
                    <AgGridColumn sortable={true} field="contactwing1" />
                    <AgGridColumn sortable={true} field="contactwing2" />
                    <AgGridColumn sortable={true} field="contacto5" />
                    <AgGridColumn sortable={true} field="contactc5" />
                    <AgGridColumn sortable={true} field="contacte5" />
                    <AgGridColumn sortable={true} field="contacta5" />
                    <AgGridColumn sortable={true} field="contactn5" />
                    <AgGridColumn sortable={true} field="contactzodiac" />
                    <AgGridColumn sortable={true} field="contacteducation" />
                    <AgGridColumn sortable={true} field="contactcareer" />
                    <AgGridColumn sortable={true} field="contactiq" />
                    <AgGridColumn sortable={true} field="contactstate" />
                    <AgGridColumn sortable={true} field="contactcity" />
                    <AgGridColumn sortable={true} field="contactpolitics" />
                    <AgGridColumn sortable={true} field="contactreligion" />
                    <AgGridColumn sortable={true} field="contactsexualorientation" />


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
var interestSelected = [];
var filterCol = ''
function asDate(dateAsString) {
    var splitFields = dateAsString.split('/');
    return new Date(splitFields[2], splitFields[1], splitFields[0]);
}

