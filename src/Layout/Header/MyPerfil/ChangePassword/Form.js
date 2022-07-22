import React, { useState, useCallback } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../../utils/messages';
import { Input, InputPassword, Button} from '../../../../components';
import { actions } from '../../reducer/actions';
import { openNotification } from '../../../../utils/functions/notification';

export const FormChangePassword = ({ form, dispatch = () => {} }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      dispatch({type: actions.controlShowModalChangePassword, payload: false})
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
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
      </Row>
      <Row gutter={8} align='bottom'>
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
      <Row>
        <Col span={24}>
          <Form.Item>
            <Button 
              type='primary'
              title='Confirmar'
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Confirmar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
