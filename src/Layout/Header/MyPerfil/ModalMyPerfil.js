import React, { useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormMyPerfil } from './Form';
import { UserSwitchOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../utils/styles";

export const ModalMyPerfil = ({ state, dispatch = () => {} }) => {
  const [form] = Form.useForm();
  
  useEffect(()=>{}, [state]);

  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <UserSwitchOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Meu Perfil
          </Col>
        </Row>
      }
      visible={state.showModal.myPerfil}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalMyPerfil, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormMyPerfil form={form} state={state} dispatch={dispatch} /> 
    </Modal>
  )
}