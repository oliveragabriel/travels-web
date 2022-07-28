import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { ConfigProvider, Layout } from 'antd';
import { Header, Sider, Footer } from '././pages/Layout';
import { Routes, Route } from "react-router-dom";
import { Home } from '././pages/Home'
import { Travels } from './pages/Travels/';
import ptBR from 'antd/es/locale/pt_BR';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider locale={ptBR}>
      <Layout>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout.Content className="site-layout" style={{ padding: '25px 25px', backgroundColor: 'whitesmoke' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: '#FFFFFF' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/travels" element={<Travels />} />
                </Routes>
            </div>
          </ Layout.Content>
          <Footer collapsed={collapsed} />
        </ Layout>
      </ Layout>
    </ConfigProvider>
  );
}

export default App;
