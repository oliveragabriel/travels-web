import React, { useState, useCallback } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../utils/messages';
import { openNotification } from '../../utils/functions/notification';
import { Button, Input } from '..';

export const FormForgetPassword = ({ form }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form]);

  return (
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
              title='Enviar'
              label='Enviar'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
