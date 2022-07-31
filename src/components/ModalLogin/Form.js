import React, { useState, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux'
import { userLogIn } from '../../reducer/reducers'
import { Row, Col, Form } from 'antd';
import { MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../utils/messages';
import { Input, InputPassword, Button, ButtonText, ModalForgetPassword, ModalCreateNewAccount} from '..';
import { actions } from '../../layout/Header/reducer/actions';
import { styleIconSizeTwentyAndColor } from '../../utils/styles';
import { openNotification } from '../../utils/functions/notification';
import { Context } from '../../layout/Header/Header';
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const [showModalForgetPassword, setShowModalForgetPassword] = useState(false)
  const [showModalCreateNewAccount, setShowModalCreateNewAccount] = useState(false)
  const reduxDispatch = useDispatch()
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleRedux = useCallback((user) => reduxDispatch({type: userLogIn, payload: user}), [reduxDispatch])

  const handleContext = useCallback(() => dispatch({type: actions.controlShowModalLogin, payload: false}), [dispatch])

  const handleNavigate = useCallback(() => navigate('/travels'), [navigate])
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const resp = { username: 'Gabriel Olivera', token: 'ABLO@#$K999522178', isLogged: true }
      console.log(values)
      handleRedux(resp)
      handleContext()
      handleNavigate()
      form.resetFields()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, handleRedux, handleContext, handleNavigate]);

  return (
    <Form form={form} layout='vertical'>
      <Row justify='center'>
        <Col span={24}>
          <Form.Item
            name='email'
            label='E-mail'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('E-mail') }
            ]}
          >
            <Input 
              placeholder='Digite seu E-mail'
              addonAfter={<MailOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name='password'
            label='Senha'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Senha') }
            ]}
          >
            <InputPassword
              placeholder='Digite sua Senha'
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button
              type='primary'
              title='Entrar'
              label='Entrar'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='start'>
        <Col span={12}>
          <Form.Item>
            <ButtonText 
              text='Esqueci Minha Senha'
              icon={<LockOutlined style={styleIconSizeTwentyAndColor}/>}
              func={() => setShowModalForgetPassword(true)}
            />
            <ModalForgetPassword visible={showModalForgetPassword} closeFn={setShowModalForgetPassword} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <ButtonText
              text='Criar Nova Conta'
              icon={<UserAddOutlined style={styleIconSizeTwentyAndColor} />}
              func={() => setShowModalCreateNewAccount(true)}
            />
            <ModalCreateNewAccount visible={showModalCreateNewAccount} closeFn={setShowModalCreateNewAccount} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
