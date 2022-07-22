import React, { useState, useCallback } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Input, Button } from '../../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../../utils/messages';
import { actions } from '../../reducer/actions';
import { openNotification } from '../../../../utils/functions/notification';

export const FormAddNewContact = ({ state, form, dispatch = () => {} }) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
      dispatch({type: actions.controlShowModalAddEndereco, payload: false})
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state?.editingContact || null}> 
      <Row gutter={8} align='bottom'>
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
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='ddd'
            label='Código de Área'
            >
            <Input 
              placeholder='Digite seu DDD'
              addonAfter={<EnvironmentOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='phone'
            label='Telefone'
          >
            <Input
              placeholder='Digite seu Telefone'
              addonAfter={<PhoneOutlined />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 6 }}>
        <Col>
          <Form.Item>
            <Button 
              type='primary'
              title='Cadastrar'
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
