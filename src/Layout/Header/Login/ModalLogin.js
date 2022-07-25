import React, { useContext } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormLogin } from './Form';
import { UserSwitchOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../utils/styles";
import { Context } from "../Header";

export const ModalLogin = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  return (
    <Modal
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <UserSwitchOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Acessar Conta
          </Col>
        </Row>
      }
      visible={state.showModal.login}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalLogin, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormLogin form={form} dispatch={dispatch} /> 
    </Modal>
  )
};