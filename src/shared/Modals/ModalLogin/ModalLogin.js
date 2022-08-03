import React, { useState, useCallback, useMemo } from "react"
import { useDispatch } from 'react-redux'
import { userLogIn } from '../../../redux/reducers/loggedUserSlice'
import { Row, Col, Form } from 'antd'
import { MailOutlined, LockOutlined, UserAddOutlined, UserSwitchOutlined } from '@ant-design/icons'
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../utils/messages'
import { Modal, Input, InputPassword, Button, ButtonText } from '../../../components'
import { ModalForgetPassword, ModalCreateNewAccount } from '..'
import { openNotification } from '../../../utils/functions/notification'
import { useNavigate } from "react-router-dom"
import { userMock } from './userMock'

export const ModalLogin = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false);
  const [showModalForgetPassword, setShowModalForgetPassword] = useState(false)
  const [showModalCreateNewAccount, setShowModalCreateNewAccount] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      const resp = await { user: userMock, token: 'ABLO@#$K999522178', isLogged: true }
      dispatch(userLogIn(resp))
      handleCancel()
      navigate('/travels')
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, navigate, dispatch, handleCancel]);

  const FormLogin = useMemo(() => (
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
              icon={<LockOutlined />}
              func={() => setShowModalForgetPassword(true)}
            />
            <ModalForgetPassword visible={showModalForgetPassword} closeFn={setShowModalForgetPassword} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <ButtonText
              text='Criar Nova Conta'
              icon={<UserAddOutlined/>}
              func={() => setShowModalCreateNewAccount(true)}
            />
            <ModalCreateNewAccount visible={showModalCreateNewAccount} closeFn={setShowModalCreateNewAccount} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  ), [form, handleSubmit, loading, showModalCreateNewAccount, showModalForgetPassword])

  return (
    <Modal
      title='Acessar Conta'
      visible={visible}
      icon={<UserSwitchOutlined />}
      handleCancel={() => handleCancel(false)}
      content={FormLogin}
    />
  )
};