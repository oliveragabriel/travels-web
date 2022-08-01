import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { userLogIn } from '../../redux/reducer/reducers'
import { Row, Col, Form } from 'antd'
import { MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons'
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../utils/messages'
import { Input, InputPassword, Button, ButtonText, ModalForgetPassword, ModalCreateNewAccount} from '..'
import { styleIconSizeTwentyAndColor } from '../../utils/styles'
import { openNotification } from '../../utils/functions/notification'
import { useNavigate } from "react-router-dom"
import { userMock } from './userMock'

export const FormLogin = ({ form, closeFn = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const [showModalForgetPassword, setShowModalForgetPassword] = useState(false)
  const [showModalCreateNewAccount, setShowModalCreateNewAccount] = useState(false)
  const reduxDispatch = useDispatch()
  const navigate = useNavigate()

  const handleRedux = useCallback((rdObj) => reduxDispatch(userLogIn(rdObj)), [reduxDispatch])

  const handleNavigate = useCallback(() => navigate('/travels'), [navigate])
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const resp = { user: userMock, token: 'ABLO@#$K999522178', isLogged: true }
      console.log(values)
      handleRedux(resp)
      closeFn()
      handleNavigate()
      form.resetFields()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, handleRedux, closeFn, handleNavigate]);

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
              htmlType='submit'
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
