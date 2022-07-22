import React, { useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormChangePassword } from './Form';
import { UnlockOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";

export const ModalChangePassword = ({ state, dispatch = () => {} }) => {
  const [form] = Form.useForm();
  useEffect(()=>{}, [state]);
  return (
    <Modal  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <UnlockOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Alterar Senha
          </Col>
        </Row>
      }
      visible={state.showModal.changePassword}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalChangePassword, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormChangePassword form={form} dispatch={dispatch} /> 
    </Modal>
  )
};