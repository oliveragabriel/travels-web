import React, { useState, useCallback, useContext } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../utils/messages';
import { Input, InputPassword, Button} from '..';
import { actions } from '../../layout/Header/reducer/actions';
import { openNotification } from '../../utils/functions/notification';
import { Context } from '../../layout/Header/Header';

export const FormChangePassword = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const {dispatch} = useContext(Context);
  
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
              title='Confirmar'             
              label='Confirmar'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
