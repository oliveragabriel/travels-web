import React, { useContext } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewUser } from './Form';
import { UserAddOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";
import { Context } from "../../Header";

export const ModalAddNewUser = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

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