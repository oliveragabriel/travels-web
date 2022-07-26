import React, { useCallback, useContext } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormChangePassword } from './Form';
import { UnlockOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../../utils/styles";
import { Context } from "../../Header";

export const ModalChangePassword = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalChangePassword, payload: false});
    form.resetFields();
  }, [dispatch, form])

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
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormChangePassword form={form} /> 
    </Modal>
  )
};