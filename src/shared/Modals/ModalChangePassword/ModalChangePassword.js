import React, { useState, useCallback, useMemo } from 'react'
import { Row, Col, Form } from 'antd'
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../utils/messages'
import { Input, InputPassword, Button, Modal } from '../../../components'
import { openNotification } from '../../../utils/functions/notification'
import { useSelector } from 'react-redux'

export const ModalChangePassword = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm();
  const reduxObj = useSelector((state) => state.user)
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
      console.log(reduxObj)
      handleCancel()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form, reduxObj, handleCancel]);

  const FormChangePassword = useMemo(() => (
      <Form form={form} layout='vertical' size='middle'> 
        <Row gutter={8} align='bottom'>
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
              <Input 
                placeholder='Digite seu Senha'
                addonAfter={<MailOutlined />}
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
                title='Confirmar'             
                label='Confirmar'
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),[form, handleSubmit, loading])

  return (
    <Modal
      title='Alterar Senha'
      visible={visible}
      icon={<UnlockOutlined />}
      handleCancel={() => handleCancel()}
      content={FormChangePassword}
    />
  )
};