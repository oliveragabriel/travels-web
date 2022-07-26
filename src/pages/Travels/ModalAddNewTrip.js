import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewTrip } from './Form';
import { RocketOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from './reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../utils/styles";
import { Context } from "./Travels";

export const ModalAddNewTrip = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.setInitialStateObject})
    form.resetFields();
  }, [dispatch, form])

  const title = useMemo(() => {
    if(state.action === 'register') { return 'Adicionar Nova Viagem'}
    if(state.action === 'edit') { return 'Editar Viagem'}
    return 'Viagem'
  }, [state]);

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
            <RocketOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            {title}
          </Col>
        </Row>
      }
      visible={state.showModal.addNewTrip}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormAddNewTrip form={form} /> 
    </Modal>
  )
}