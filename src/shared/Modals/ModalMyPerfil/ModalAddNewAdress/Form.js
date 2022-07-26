import React, { useState, useCallback, useContext } from 'react'
import { Row, Col, Form } from 'antd'
import { HomeOutlined, InfoCircleOutlined, FieldNumberOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Input, CountrySelector, Button } from '../../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../../utils/messages'
import { actions } from '../reducer/actions'
import { openNotification } from '../../../../utils/functions'
import { Context } from '..'

export function FormAddNewAdress({ form }) {
  const [loading, setLoading] = useState(false)
  const { state, dispatch } = useContext(Context)
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      console.log(values)
      openNotification('success','Sucesso', requestGenericTextMsg.success)
      dispatch({ type: actions.controlShowModalAddNewAdress, payload: false })
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form, dispatch])

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state?.editing.adress || null}> 
      <Row gutter={8} align='bottom'>
        <Col span={12}>
          <Form.Item
            name='adress'
            label='Endereço'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Endereço') }
            ]}
          >
            <Input 
              placeholder='Digite seu Endereço'
              addonAfter={<HomeOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='complement'
            label='Complemento'
          >
            <Input
              placeholder='Digite um Complemento'
              addonAfter={<InfoCircleOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='number'
            label='Número'
          >
            <Input 
              placeholder='Digite um Número'
              addonAfter={<FieldNumberOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='district'
            label='Bairro'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Bairro') }
            ]}
          >
            <Input
              placeholder='Digite seu Bairro'
              addonAfter={<HomeOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='city'
            label='Cidade'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Cidade') }
            ]}
          >
            <Input 
              placeholder='Digite sua Cidade'
              addonAfter={<HomeOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='state'
            label='Estado'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('Estado') }
            ]}
          >
            <Input
              placeholder='Digite seu Estado'
              addonAfter={<HomeOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='country'
            label='País'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('País') }
            ]}
          >
            <CountrySelector 
              placeholder='Escolha um país'
              allowClear
              showSearch
              optionFilterProp="label"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='zipcode'
            label='CEP'
            hasFeedback
            required
            rules={[
              { required: true, message: requiredFieldsTextMsg('CEP') }
            ]}
          >
            <Input
              placeholder='Digite seu CEP'
              addonAfter={<EnvironmentOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button 
              type='primary'
              htmlType='submit'
              title='Cadastrar'
              label='Cadastrar'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
