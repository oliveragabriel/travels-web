import React, { useState, useCallback } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../../../utils/messages';
import { openNotification } from '../../../../../utils/functions/notification';

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
      </Row>
      <Row style={{ marginTop: 6 }}>
        <Col span={24}>
          <Form.Item>
            <Button 
              type='primary'
              title='Enviar'
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Enviar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
