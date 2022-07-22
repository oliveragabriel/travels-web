import React, { useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewUser } from './Form';
import { UserAddOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";

export const ModalAddNewUser = ({ state, dispatch = () => {} }) => {
  const [form] = Form.useForm();  
  
  useEffect(()=>{}, [state]);

  return (
    <Modal
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <UserAddOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Cadastrar Nova Conta
          </Col>
        </Row>
      }
      visible={state.showModal.addNewUser}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalAddNewUser, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormAddNewUser form={form} /> 
    </Modal>
  )
}