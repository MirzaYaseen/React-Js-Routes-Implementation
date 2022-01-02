
import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {DropdownButton,Dropdown, Button} from 'react-bootstrap';

function AssignStudent() {
  return (
    <div className="App">
      
        Select Student
        
        <div  className='menu'>
      <DropdownButton id="dropdown-basic-button" title="Student">
  <Dropdown.Item href="#/action-1">Shahmeer Hashmi</Dropdown.Item>
  <Dropdown.Item href="#/action-2">M Yaseen</Dropdown.Item>
  <Dropdown.Item href="#/action-3">M usman</Dropdown.Item>
</DropdownButton>
</div>
Select Class
        
<div  className='menu'>
<DropdownButton id="dropdown-basic-button" title="Class">
<Dropdown.Item href="#/action-1">BCS-6A</Dropdown.Item>
<Dropdown.Item href="#/action-2">BCS-6B </Dropdown.Item>
</DropdownButton>
</div>

<div className="menu">
    
<Button variant="success">Submit</Button>
</div>


    </div>
  );
}

export default AssignStudent;
