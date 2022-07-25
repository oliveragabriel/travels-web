import React, { useCallback, useContext, useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { CarOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../utils/styles";
import { Context } from "../../Travels";

export const ModalAddNewTransport = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalAddNewTransport, payload: false})
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
          <CarOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Transportes
          </Col>
        </Row>
      }
      visible={state.showModal.addNewTransport}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
    </Modal>
  )
}