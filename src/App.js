import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import { Header, Sider, Footer } from './Layout';
import { Home } from './Home'
import { Travels } from './Travels/Travels';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        
        <Layout.Content className="site-layout" style={{ padding: '25px 25px', backgroundColor: 'whitesmoke' }}>  
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: '#FFFFFF' }}>
            <Home />
          </div>
        </Layout.Content>
        
        <Layout.Content className="site-layout" style={{ padding: '25px 25px', backgroundColor: 'whitesmoke' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: '#FFFFFF' }}>
            <Travels />
          </div>
        </ Layout.Content>

        <Footer collapsed={collapsed} />
      </ Layout>
    </ Layout>
  );
}

export default App;
