import React, { useState, useCallback, useContext } from 'react';
import { Row, Col, Form, Select } from 'antd';
import { VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Input, Button, InputNumber } from '../../../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../../../utils/messages';
import { actions } from '../../../reducer/actions';
import { openNotification } from '../../../../../utils/functions/notification';
import { Context } from '../../../Travels';
import { options } from './options';

export const FormAddNewTransport = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const {state, dispatch} = useContext(Context);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
      dispatch({type: actions.controlShowModalAddNewAcommodation, payload: false})
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state?.travels.nextTravels[0].days[0].acommodation || null}> 
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='type'
            label='Tipo'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Tipo') }
            ]}
            >
            <Select 
              placeholder='Escolha uma opção'
              options={options}
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='price'
            label='Valor'
          >
            <InputNumber 
              placeholder='0,00'
              min={0.01}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='pickupAdress'
            label='Local de Embarque'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Local de Embarque') }
            ]}
            >
            <Input 
              placeholder='Digite o Local de Embarque'
              addonAfter={<VerticalAlignTopOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='destinyAdress'
            label='Local de Destino'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Local de Destino') }
            ]}
            >
            <Input 
              placeholder='Digite o Local de Destino'
              addonAfter={<VerticalAlignBottomOutlined />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 6 }}>
        <Col>
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
