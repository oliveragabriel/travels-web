import React, { useState, useCallback, useContext } from 'react';
import { Row, Col, Form } from 'antd';
import { MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { requestGenericTextMsg, requiredFieldsTextMsg } from '../../../utils/messages';
import { Input, InputPassword, Button, ButtonText} from '../../../components';
import { actions } from '../reducer/actions';
import { styleIconSizeTwentyAndColor } from '../../../utils/styles';
import { openNotification } from '../../../utils/functions/notification';
import { Context } from '../Header';
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const {dispatch} = useContext(Context);
  const navigate = useNavigate();
  
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      dispatch({type: actions.controlShowModalLogin, payload: false});
      navigate('/travels')
      form.resetFields()
    } catch (error) {
      openNotification('error','Erro', requestGenericTextMsg.error);
    } finally {
      setLoading(false);
    }
  },[form, dispatch]);

  return (
    <Form form={form} layout='vertical'> 
      <Row justify='center'>
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
      <Row justify='center'>
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
      <Row justify='center' style={{ marginTop: 6 }}>
        <Col span={24}>
          <Form.Item>
            <Button
              title='Entrar'
              label='Entrar'
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='start'>
        <Col span={12}>
          <Form.Item>
            <ButtonText 
              text='Esqueci Minha Senha'
              icon={<LockOutlined style={styleIconSizeTwentyAndColor}/>}
              func={() => dispatch({type: actions.controlShowModalForgetPassword, payload: true})}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <ButtonText
              text='Criar Nova Conta'
              icon={<UserAddOutlined style={styleIconSizeTwentyAndColor} />}
              func={() => dispatch({type: actions.controlShowModalAddNewUser, payload: true})}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
