import React from 'react';
import Idform from './idform';

import { Layout } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Todo from './todo';


function Idgenerator() {

  return (
    <div>
      <Layout>
        <Sider>
            <h3 style={{color:'white'}}>Add Task</h3>
            <Todo/>
        </Sider>
        <Content><Idform/></Content>
      </Layout>
    </div>
  );
}

export default Idgenerator;