import React from 'react';
import { Button, Input, Space } from 'antd';
import './App.css';

class Addtodo extends React.Component {

    render() {
        return (  
            <div>
               <Space.Compact
                style={{
                    width: '100%',
                }}
                >
                <Input id='newItem'/>
                <Button type="primary" onClick={()=>{this.props.onAdd(document.getElementById('newItem').value);}}>Submit</Button>
                </Space.Compact>
                        </div>
                    );
                }
}

export default Addtodo;