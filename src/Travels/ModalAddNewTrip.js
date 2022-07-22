import React, { useMemo } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewTrip } from './Form';
import { RocketOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../utils/styles";

export const ModalAddNewTrip = ({ travel, action, state, dispatch = () => {} }) => {
  const [form] = Form.useForm();
  const title = useMemo(() => {
    if(action === 'register') { return 'Adicionar Nova Viagem'}
    if(action === 'edit') { return 'Editar Viagem'}
    return 'Viagem'
  }, [action]);
  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <RocketOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            {title}
          </Col>
        </Row>
      }
      visible={state.showModalAddNewTrip}
      centered
      footer={null}
      onCancel={() => {
        dispatch({type: actions.controlShowModalAddNewTrip, payload: false});
        form.resetFields();
      }}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormAddNewTrip travel={travel} form={form} dispatch={dispatch} /> 
    </Modal>
  )
}