import React, { useContext } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormForgetPassword } from './Form';
import { LockOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";
import { Context } from "../../Header";

export const ModalForgetPassword = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  return (
    <Modal
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <LockOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Recuperar Minha Senha
          </Col>
        </Row>
      }
      visible={state.showModal.forgetPassword}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalForgetPassword, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormForgetPassword form={form} /> 
    </Modal>
  )
}