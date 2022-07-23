import React, { useCallback, useEffect, useReducer } from 'react';
import { Layout, Row, Col } from "antd"
import { ButtonCircle } from "../../components"
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
import { styleIconSizeTwenty } from '../../utils/styles';
import { userMock } from './MyPerfil/userMock';
import { openNotification } from '../../utils/functions/notification';

export const Header = ({ collapsed, setCollapsed = () => {} }) => {
  const [state, dispatch] = useReducer(headerReducer, initialState);

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

  useEffect(() => getLoggedUserData())
  
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
                func={() => dispatch({type: actions.controlShowModalLogin, payload: true})}
              />
              <ModalLogin state={state} dispatch={dispatch} />
              <ModalForgetPassword state={state} dispatch={dispatch} />
              <ModalAddNewUser state={state} dispatch={dispatch} />
            </Col>
            <Col>
              <ButtonCircle
                text='Meu Perfil'
                icon={<UserOutlined style={styleIconSizeTwenty}/>}
                func={() => dispatch({type: actions.controlShowModalMyPerfil, payload: true})}
              />
              <ModalMyPerfil state={state} dispatch={dispatch} />
              <ModalChangePassword state={state} dispatch={dispatch} />
              <ModalAddNewAdress state={state} dispatch={dispatch} />
              <ModalAddNewContact state={state} dispatch={dispatch} />
            </Col>
            <Col>
              <ButtonCircle 
                text='Sair'
                icon={<RightCircleTwoTone style={styleIconSizeTwenty}/>}
                func={() => {}}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  )
}