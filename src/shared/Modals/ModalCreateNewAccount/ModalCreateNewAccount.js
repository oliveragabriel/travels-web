import React, { useCallback, useMemo, useState } from "react"
import { Row, Col, Form } from 'antd'
import { MailOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../utils/messages'
import { Modal, Input, InputPassword, Button } from '../../../components'
import { openNotification } from '../../../utils/functions/notification'

export const ModalCreateNewAccount = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      console.log(values)
      openNotification('success','Sucesso', requestGenericTextMsg.success)
      handleCancel()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form, handleCancel])

  const FormCreateNewAccount = useMemo(() => (
        <Form form={form} layout='vertical' size='middle'> 
          <Row>
            <Col span={24}>
              <Form.Item
                name='username'
                label='Nome'
                hasFeedback
                required
                rules={[
                  { required: true, message: requiredFieldsTextMsg('Nome') }
                ]}
              >
                <Input 
                  placeholder='Digite seu Nome'
                  addonAfter={<UserOutlined />}
                />
              </Form.Item>
            </Col>
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
              <Form.Item
                name='confirmPassword'
                label='Confirmar Senha'
                hasFeedback
                required
                rules={[
                  { required: true, message: requiredFieldsTextMsg('Confirmar Senha') }
                ]}
              >
                <InputPassword
                  placeholder='Confirme sua Senha'
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button 
                  type='primary'
                  htmlType='submit'
                  title='Criar'
                  label='Criar'
                  handleSubmit={handleSubmit}
                  loading={loading}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
    ), [form, handleSubmit, loading])

  return (
    <Modal
      title='Cadastrar Nova Conta'
      visible={visible}
      icon={<UserAddOutlined />}
      handleCancel={() => handleCancel()}
      content={FormCreateNewAccount}
    />
  )
}