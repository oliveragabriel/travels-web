import React, { useCallback, useEffect, useReducer } from 'react';
import { Layout, Row, Col } from "antd"
import { useNavigate } from "react-router-dom";
import { ButtonCircle } from "../../../components"
import { 
  UserSwitchOutlined, 
  UserOutlined, 
  RightCircleTwoTone, 
  MenuUnfoldOutlined, 
  MenuFoldOutlined 
} from '@ant-design/icons';
import { 
  ModalAddNewUser, 
  ModalForgetPassword, 
  ModalLogin 
} from './Login';
import { 
  ModalAddNewContact, 
  ModalAddNewAdress, 
  ModalChangePassword, 
  ModalMyPerfil 
} from './MyPerfil';
import { headerReducer, initialState } from './reducer';
import { actions } from './reducer/actions';
import { styleIconSizeTwenty } from '../../../utils/styles';
import { userMock } from './userMock';
import { openNotification } from '../../../utils/functions/notification';

export const Context = React.createContext({state: {}, dispatch: () => {}});

export const Header = ({ collapsed, setCollapsed = () => {} }) => {
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/home')
  }

  const getLoggedUserData = useCallback(() => {
    try {
      // const resp =  
      dispatch({type: actions.setLoggedUserData, payload: userMock});
    } catch (error) {
      openNotification.error({
        message: 'Erro',
        description: 'Não foi possível carregar as informações do seu Usuário!'
      });
    }
  }, []);

  useEffect(() => getLoggedUserData(), [])
  
  return (
    <Context.Provider value={{state, dispatch}}>
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
                  func={() => dispatch({type: actions.controlShowModalLogin, payload: true})}
                />
                <ModalLogin />
                <ModalForgetPassword />
                <ModalAddNewUser />
              </Col>
              <Col>
                <ButtonCircle
                  text='Meu Perfil'
                  icon={<UserOutlined style={styleIconSizeTwenty}/>}
                  func={() => dispatch({type: actions.controlShowModalMyPerfil, payload: true})}
                />
                <ModalMyPerfil />
                <ModalChangePassword />
                <ModalAddNewAdress />
                <ModalAddNewContact />
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
    </Context.Provider>
  )
}