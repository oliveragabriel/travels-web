import React, { useState, useCallback, useContext } from 'react';
import { Row, Col, Form, Collapse, Avatar } from 'antd';
import { UserOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, DatePicker, CountrySelector, Button } from '../../../components'
import { requiredFieldsTextMsg, requestGenericTextMsg } from '../../../utils/messages';
import { TableContacts, TableAdresses } from './index';
import { actions } from '../reducer/actions';
import { styleIconSizeTwentyAndColor } from '../../../utils/styles';
import { openNotification } from '../../../utils/functions/notification';
import { Context } from '../Header';

export const FormMyPerfil = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const {state, dispatch} = useContext(Context);
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      openNotification('success','Sucesso', requestGenericTextMsg.success);
      dispatch({type: actions.controlShowModalMyPerfil, payload: false})
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical' size='middle' initialValues={state.user}> 
      <Row justify='center'>
        <Col>
          <Form.Item
            name='photo'
          >
            <Avatar 
              size={100} 
              icon={<UserOutlined />} 
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8} align='bottom'>
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
      </Row>
      <Row gutter={8} align='bottom'>
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
            <TableContacts loading={loading} state={state} dispatch={dispatch} />
          </Collapse.Panel>
          <Collapse.Panel header={<Row><Col>Endereços</Col></Row>} extra={<HomeOutlined style={styleIconSizeTwentyAndColor}/>} key="2">
            <TableAdresses loading={loading} state={state} dispatch={dispatch} />
          </Collapse.Panel>
        </Collapse>
        </Col>
      </Row>
      <Row gutter={8} style={{ marginTop: 12 }}>
        <Col>
          <Form.Item>
            <Button 
              type='primary'
              title='Alterar Perfil'
              htmlType='submit'
              onClick={handleSubmit}
              loading={loading}
            >
              Alterar Perfil
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button 
              type='ghost'
              title='Configurar Senha'
              onClick={() => dispatch({type: actions.controlShowModalChangePassword, payload: true})}
            >
              Configurar Senha
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
