import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Row, Col, Form } from 'antd'
import { HomeOutlined, EditOutlined } from '@ant-design/icons'
import { Modal, Input, InputNumber, CurrencySelector, Select, Button, CollapseAdressInfo } from "../../../components"
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages'
import { openNotification } from '../../../utils/functions/notification'
import { options } from './options'
import { useSelector } from "react-redux"

export const ModalAddNewAcommodation = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const acommodation = useSelector((state) => state?.selectedTravelDay?.acommodation)

  const handleCancel = useCallback(() => {
    closeFn(false)
    form.resetFields()
  }, [closeFn, form])

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
  },[form])


  useEffect(() => {
    form.resetFields();
    setTimeout(() => form.setFieldsValue({ ...acommodation }), 0);
  }, [acommodation, form]);

  const FormAddNewAcommodation = useMemo(() => (
    <Form form={form} layout='vertical'> 
      <Row gutter={8} align='bottom'>
        <Col span={24}>
          <Form.Item
            name='name'
            label='Nome do Local'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Nome do Local') }
            ]}
            >
            <Input 
              placeholder='Digite um Nome'
              addonAfter={<EditOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='type'
            label='Tipo'
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
            tooltip='Escolha uma moeda e digite o valor à ser pago. Exemplo: Para Real Brasileiro, selecione a opção com a sigla (BRL) e o símbolo (R$).'
          >
            <InputNumber 
              placeholder='0,00'
              min={0.01}
              addonBefore={
                <Form.Item name='currency' noStyle>
                  <CurrencySelector />
                </Form.Item>
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <CollapseAdressInfo />
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}> 
        <Col>
          <Form.Item>
            <Button 
              type='primary'
              title='Confirmar'
              label='Confirmar'
              htmlType='submit'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  ), [form, handleSubmit, loading]);

  return (
    <Modal
      width={800}
      title='Hospedagem'
      visible={visible}
      icon={<HomeOutlined />}
      handleCancel={() => handleCancel()}
      content={FormAddNewAcommodation}
    />
  )
}