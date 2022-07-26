import React, { useCallback, useContext, useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { HomeOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../../utils/styles";
import { Context } from "../../../Travels";
import { FormAddNewAcommodation } from "./FormAcommodation";

export const ModalAddNewAcommodation = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalAddNewAcommodation, payload: false})
    form.resetFields();
  }, [dispatch, form])

  useEffect(() => {
    form.resetFields();
    setTimeout(() => form.setFieldsValue({...state.editing}), 0);
  }, [form]);

  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
          <HomeOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Hospedagem
          </Col>
        </Row>
      }
      visible={state.showModal.addNewAcommodation}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormAddNewAcommodation form={form} />
    </Modal>
  )
}