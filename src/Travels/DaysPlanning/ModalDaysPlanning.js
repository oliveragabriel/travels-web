import React, { useCallback, useContext, useEffect } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { TableDays } from './TableDays';
import { CalendarOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../utils/styles";
import { Context } from "../Travels";

export const ModalDaysPlanning = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalDaysPlanning, payload: false})
    form.resetFields();
  }, [dispatch, form])

  useEffect(() => {
    form.resetFields();
    setTimeout(() => form.setFieldsValue({...state.editing}), 0);
  }, [state.editing, form]);

  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
          <CalendarOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            Planejamento
          </Col>
        </Row>
      }
      visible={state.showModal.daysPlanning}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <TableDays form={form} /> 
    </Modal>
  )
}