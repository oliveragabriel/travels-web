import React, { useState, useCallback, useMemo } from "react"
import { Row, Col, Form } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { Modal, Button, Input } from '../../../components'

export const ModalForgetPassword = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields()
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success)
      handleCancel()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form, handleCancel]);

  const FormForgetPassword = useMemo(() => (
    <Form form={form} layout='vertical' size='middle'> 
      <Row>
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
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              title='Enviar'
              label='Enviar'
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
      title='Recuperar Minha Senha'
      visible={visible}
      icon={<LockOutlined />}
      handleCancel={() => handleCancel()}
      content={FormForgetPassword}
    />
  )
}