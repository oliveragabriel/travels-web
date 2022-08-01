import React, { useState, useCallback, useContext, useEffect } from 'react'
import { Row, Col, Form, Collapse, Avatar } from 'antd'
import { UserOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons'
import { Input, DatePicker, CountrySelector, Table, Button, ModalChangePassword } from '../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../utils/messages'
import { actions } from './reducer/actions'
import { styleIconSizeTwentyAndColor } from '../../utils/styles'
import { Context } from '.'
import { columnsAddresses, columnsContacts } from '.'
import { ModalAddNewContact, ModalAddNewAdress } from '.'
import { openNotification } from '../../utils/functions'
import { useSelector } from 'react-redux'

export const FormMyPerfil = ({ form }) => {
  const [loading, setLoading] = useState(false)
  const [showModalChangePassword, setShowModalChangePassword] = useState(false)
  const {state, dispatch} = useContext(Context)
  const user = useSelector((state) => state.loggedUser.user)

  const handleAddAdress = useCallback(() => dispatch({type: actions.toogleAddNewAdress}), [dispatch])

  const handleEditAdress = useCallback((record) => dispatch({type: actions.toogleEditAdress, payload: record}), [dispatch])

  const handleAddContact = useCallback(() => dispatch({type: actions.toogleAddNewContact}), [dispatch])

  const handleEditContact = useCallback((record) => dispatch({type: actions.toogleEditContact, payload: record}), [dispatch])
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const values = await form.validateFields()
      console.log(values)
      openNotification('success','Sucesso', requestGenericTextMsg.success)
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error)
    } finally {
      setLoading(false)
    }
  },[form])

  const setLoggedUserInContext = useCallback(() => {
    dispatch({type: actions.setLoggedUserData, payload: user})
  }, [dispatch, user])

  useEffect(() => setLoggedUserInContext(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  [])

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={{ ...user }} > 
      <Row gutter={8} justify='center'>
        <Col span={24}>
          <Form.Item
            name='photo'
          >
            <Avatar 
              size={100} 
              icon={<UserOutlined />} 
            />
          </Form.Item>
        </Col>
        <Col span={12}>
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
              addonAfter={<UserOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='birth'
            label='Data de Nascimento'
          >
            <DatePicker
              placeholder='Selecione sua data de nascimento'
              format={'DD/MM/YYYY'} 
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='nacionality'
            label='Nacionalidade'
          >
            <CountrySelector
              allowClear={true}
              showSearch={true}
              optionFilterProp={'label'}
              placeholder="Busque e selecione o país de origem"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='hometown'
            label='Cidade Natal'
          >
            <Input
              addonAfter={<HomeOutlined />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Collapse>
          <Collapse.Panel header={<Row><Col>Contatos</Col></Row>} extra={<PhoneOutlined style={styleIconSizeTwentyAndColor}/>} key="1">
            <Row>
              <Col span={24}>
                <Button 
                  type='primary'
                  htmlType='button'
                  title='Adicionar Contato'
                  label='Adicionar Contato'
                  handleSubmit={() => handleAddContact()}
                />
                <ModalAddNewContact />
              </Col>
            </Row>
            <Row style={{ marginTop: 12 }}>
              <Col span={24}>
                <Table rowKey='id' columns={columnsContacts(handleEditContact)} size="small" dataSource={state.user.contacts} />
              </Col>
            </Row>
          </Collapse.Panel>
          <Collapse.Panel header={<Row><Col>Endereços</Col></Row>} extra={<HomeOutlined style={styleIconSizeTwentyAndColor}/>} key="2">
            <Row>
              <Col span={24}>
                <Button 
                  type='primary'
                  htmlType='button'
                  title='Adicionar Endereço'
                  label='Adicionar Endereço'
                  handleSubmit={() => handleAddAdress()}
                />
                <ModalAddNewAdress />
              </Col>
            </Row>
            <Row style={{ marginTop: 12 }}>
              <Col span={24}>
                <Table rowKey='id' columns={columnsAddresses(handleEditAdress)} size="small" dataSource={state.user.adresses} />
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 12 }}>
        <Col>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              title='Alterar Perfil'
              label='Alterar Perfil'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button 
              type='ghost'
              htmlType='button'
              title='Configurar Senha'
              label='Configurar Senha'
              handleSubmit={() => setShowModalChangePassword(true)}
            />
            <ModalChangePassword visible={showModalChangePassword} closeFn={setShowModalChangePassword} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
