import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { ConfigProvider as AntdConfigProvider, Layout } from 'antd'
import 'antd/dist/antd.min.css'
import { Header, Sider, Footer } from './layout'
import { ContentCard as Card } from './components'
import { Home, Travels, Activities } from '././pages'
import ptBR from 'antd/es/locale/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AntdConfigProvider locale={ptBR}>
      <Layout>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout.Content className="site-layout" style={{ padding: '25px 25px', backgroundColor: 'whitesmoke', position: 'relative', minHeight: '83vh' }}>
            <Card>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/activities" element={<Activities />} />
              </Routes>
            </Card>
          </Layout.Content>
          <Footer collapsed={collapsed} style={{ position: 'absolute', bottom: 0, width: '100%' }} />
        </Layout>
      </ Layout>
    </AntdConfigProvider>
  )
}

export default App
