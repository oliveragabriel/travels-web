import React, { useState, useCallback } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../../../utils/messages';
import { Input, InputPassword, Button } from '../../../../../components';
import { openNotification } from '../../../../../utils/functions/notification';

export const FormAddNewUser = ({ form }) => {
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
        </Row>
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
        <Row>
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
        </Row>
        <Row>
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
        </Row>
        <Row style={{ marginTop: 6 }}>
          <Col span={24}>
            <Form.Item>
              <Button 
                type='primary'
                title='Criar'
                htmlType='submit'
                onClick={handleSubmit}
                loading={loading}
              >
                Criar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
  );
}
