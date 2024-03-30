import React, { useState }  from 'react';
import Addtodo from './addtodo';
import { Collapse } from "antd";

import './App.css';

function Todo() {
    const[ref,sref] = useState(true)

    const r = {
        display:ref?'initial':'none'
    }

    const [tddata,settddata] = useState([{
        label:'Task 1',
        children: 'Cook',
      },
      {
        label:'Task 2',
        children: 'Bake',
      },
      {
        label:'Task 3',
        children: 'Eat',
      }]) 

      async function onAdd(item){
        var tdd = tddata
        var ntdd = {
            label:'Task '+(tdd.length+1),
            children: item
        }
        tdd.push(ntdd)
        await settddata(tdd)
        await sref(false)
        await sref(true)
      }
  return (
    <div>
      <Addtodo onAdd={onAdd}/>
      <br></br>
      <div className='bgcol'>
        <div style={r}>
  <Collapse items={tddata}/>
  </div>
  </div>
    </div>
  );
}

export default Todo;