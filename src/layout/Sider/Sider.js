import React, { useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { Layout, Row, Col, Image } from "antd"
import { Menu, Avatar } from './styles'  
import { 
  InfoOutlined, 
  RocketOutlined, 
  TrophyOutlined, 
  HomeOutlined, 
  CarOutlined, 
  HeartOutlined, 
  EnvironmentOutlined, 
  ProfileOutlined,
  EllipsisOutlined
} from '@ant-design/icons'
import { styleIconSizeThirtyAndColor, styleIconSizeTwentyAndColor } from '../../utils/styles'
import { useSelector } from 'react-redux'
import gobackpack from '../../assets/img/gobackpack.png'

export const Sider = ({ collapsed }) => {
  const isLogged = useSelector((state) => state.loggedUser.isLogged)
  const navigate = useNavigate()
  
  const functionalities = useMemo(() => {
    let initial = [
      { label: 'Início', key: '1', icon: <InfoOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/home') },
      { label: 'Trajetos', key: '3', icon: <ProfileOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/routes')},
      { label: 'Hospedagens', key: '5', icon: <HomeOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/accommodations')},
      { label: 'Transportes', key: '6', icon: <CarOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/transports')},
      { label: 'Pontos Turísticos', key: '4', icon: <EnvironmentOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/attractions')}
    ]
    if(isLogged === true) {
      initial.push(
        { label: 'Viagens', key: '2', icon: <RocketOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/travels')},
        { label: 'Desejos', key: '7', icon: <HeartOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/wishes')},
        { label: 'Conquistas', key: '8', icon: <TrophyOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/conquests')}
      )
    }
    const organizeArray = initial.sort((a,b) => a.key - b.key);
    return organizeArray
  }, [isLogged, navigate])

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#F0F8FF' }}>
        <Row justify='center' align='bottom'>
          <Col style={{ padding: 12 }}>
            {collapsed ? <EllipsisOutlined style={styleIconSizeThirtyAndColor} /> : 
            <Avatar shape="square" alt='Go Backpack' src={<Image preview={false} src={gobackpack} />} />}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
              <Menu items={functionalities} />
          </Col>
        </Row>
    </Layout.Sider>
  )
}