import React from 'react';
import Idform from './idform';

import { Layout } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Todo from './todo';


function App() {

  return (
    <div>
      <Layout>
        <Sider><Todo/></Sider>
        <Content><Idform/></Content>
      </Layout>
    </div>
  );
}

export default App;
