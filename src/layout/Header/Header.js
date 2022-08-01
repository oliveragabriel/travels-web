import React, { useCallback, useState } from 'react'
import { Layout, Row, Col } from "antd"
import { useNavigate } from "react-router-dom"
import { ButtonCircle } from "../../components"
import { ModalLogin, ModalMyPerfil } from "../../shared/Modals"
import { 
  UserSwitchOutlined, 
  UserOutlined, 
  RightCircleTwoTone, 
  MenuUnfoldOutlined, 
  MenuFoldOutlined 
} from '@ant-design/icons'
import { styleIconSizeTwenty } from '../../utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../../redux/reducers/loggedUserSlice'

export const Header = ({ collapsed, setCollapsed = () => {} }) => {
  const isLogged = useSelector((state) => state.loggedUser.isLogged)
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
              {isLogged === false ? <Col>
                <ButtonCircle
                  text='Acessar Conta'
                  icon={<UserSwitchOutlined style={styleIconSizeTwenty}/>}
                  func={() => setShowModalLogin(true)}
                />
                <ModalLogin visible={showModalLogin} closeFn={setShowModalLogin} />
              </Col>: null}
              {isLogged === true ? <Col>
                <ButtonCircle
                  text='Meu Perfil'
                  icon={<UserOutlined style={styleIconSizeTwenty}/>}
                  func={() => setShowModalMyPerfil(true)}
                />
                <ModalMyPerfil visible={showModalMyPerfil} closeFn={setShowModalMyPerfil} />
              </Col>: null}
              {isLogged === true ? <Col>
                <ButtonCircle 
                  text='Sair'
                  icon={<RightCircleTwoTone style={styleIconSizeTwenty}/>}
                  func={() => handleExit()}
                />
              </Col>: null}
            </Row>
          </Col>
        </Row>
      </Layout.Header>
  )
}