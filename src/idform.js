import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';
import Idcard from './idcard';

function Idform() {
    const [isVisible, setIsVisible] = useState(true);
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [empID, setempID] = useState('');
    const [pfile, psetFile] = useState();
    const [errMsg, setErrmsg] = useState('');
      
    function handleChange(e) {
      console.log(e.target.files);
      psetFile(URL.createObjectURL(e.target.files[0]));
    }
  
    function checkVal(){
      setErrmsg()
      var err = false
      if(empID<0){
        err = true
        setErrmsg('Error: Id cannot be less than 0.')
      }
      
      let regex = /^[a-zA-Z]+$/;
  
      if(!regex.test(fName)||!regex.test(lName)){
        err = true
        setErrmsg('Error: First Name or Last Name is either blank or having a number.')
      }
  
      if(!err){
        handleSubmit()
      }
    }
  
    function handleSubmit(){
      setIsVisible(!isVisible)
    }
  
    const form_visi = {
      display: isVisible ? 'initial' : 'none',
    };
  
    const id_visi = {
      display: isVisible ? 'none' : 'initial',
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <div style={form_visi} className='form-design'>
            <p className='errmsg'>{errMsg}</p>
            <h3>Employee Details</h3>
            <hr/>
            <form>
              <table className='table-design'>
                <tbody>
                  <tr>
                  <td><label>First Name</label></td>
                  <td><input type='text' value={fName} onChange={(e)=>{setfName(e.target.value)}}/></td>
                  </tr>
                  <tr>
                  <td><label>Last Name</label></td>
                  <td><input type='text' value={lName} onChange={(e)=>{setlName(e.target.value)}} /></td>
                  </tr>
                  <tr>
                    <td><label>Employee ID</label></td>
                    <td><input type='number' value={empID} onChange={(e)=>{setempID(e.target.value)}} /></td>
                  </tr>
                  <tr>
                    <td><label>Profile Pic</label></td>
                    <td><input type='file' onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><hr/></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Button variant="light" onClick={checkVal}>Submit</Button></td>
                  </tr>
                </tbody>
              </table>
            </form>
            <hr/>
          </div>
          <div style={id_visi}>
            <p onClick={handleSubmit}>Back<br></br></p>
          </div>
          <div style={id_visi} className='id-design'>
            <Idcard pimage={pfile} firstname={fName} lastname={lName} employeeid={empID}/>
          </div>
        </header>
      </div>
    );
  }
  
  export default Idform;