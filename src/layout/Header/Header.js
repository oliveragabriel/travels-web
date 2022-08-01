import React, { useCallback, useState } from 'react'
import { Layout, Row, Col } from "antd"
import { useNavigate } from "react-router-dom"
import { ModalLogin, ModalMyPerfil, ButtonCircle } from "../../components"
import { 
  UserSwitchOutlined, 
  UserOutlined, 
  RightCircleTwoTone, 
  MenuUnfoldOutlined, 
  MenuFoldOutlined 
} from '@ant-design/icons'
import { styleIconSizeTwenty } from '../../utils/styles'
import { useDispatch } from 'react-redux'
import { userLogOut } from '../../reducer/reducers'

export const Header = ({ collapsed, setCollapsed = () => {} }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModalLogin, setShowModalLogin] = useState(false)
  const [showModalMyPerfil, setShowModalMyPerfil] = useState(false)

  const handleExit = useCallback(() => {
    dispatch(userLogOut())
    navigate('/home')
  }, [dispatch, navigate])
  
  return (
      <Layout.Header>
        <Row justify='space-between'>
          <Col>
            <ButtonCircle
              text={collapsed ? 'Expandir Menu' : 'Ocultar Menu'}
              icon={collapsed ? <MenuUnfoldOutlined style={styleIconSizeTwenty}/> : <MenuFoldOutlined style={styleIconSizeTwenty}/>}
              func={() => setCollapsed(!collapsed)}
            />
          </Col>
          <Col>
            <Row gutter={[12,0]} justify='end' align='bottom' >
              <Col>
                <ButtonCircle
                  text='Acessar Conta'
                  icon={<UserSwitchOutlined style={styleIconSizeTwenty}/>}
                  func={() => setShowModalLogin(true)}
                />
                <ModalLogin visible={showModalLogin} closeFn={setShowModalLogin} />
              </Col>
              <Col>
                <ButtonCircle
                  text='Meu Perfil'
                  icon={<UserOutlined style={styleIconSizeTwenty}/>}
                  func={() => setShowModalMyPerfil(true)}
                />
                <ModalMyPerfil visible={showModalMyPerfil} closeFn={setShowModalMyPerfil} />
              </Col>
              <Col>
                <ButtonCircle 
                  text='Sair'
                  icon={<RightCircleTwoTone style={styleIconSizeTwenty}/>}
                  func={() => handleExit()}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
  )
}