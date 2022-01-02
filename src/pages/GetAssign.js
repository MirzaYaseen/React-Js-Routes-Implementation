import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './GetMaterial';
import {DropdownButton,Dropdown, Button} from 'react-bootstrap';

function GetAssign() {
  return (
    <div className="App">
      Select Assignment By ID
        
        <div  className='menu'>
        <DropdownButton id="dropdown-basic-button" title="ID" >
        <Dropdown.Item href="#/action-1">020</Dropdown.Item>
        <Dropdown.Item href="#/action-2">043 </Dropdown.Item>
        <Dropdown.Item href="#/action-3">119</Dropdown.Item>
        </DropdownButton>
        </div>
        <div className="menu">
        <Button variant="primary">Get Assignment</Button>
        </div>
    </div>
  );
}

export default GetAssign;
