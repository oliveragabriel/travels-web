import React, { useCallback, useEffect, useMemo } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewContact } from './Form';
import { PhoneOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";

export const ModalAddNewContact = ({ state, dispatch = () => {} }) => {
  const [form] = Form.useForm();

  const handleCancel = useCallback(() => {
    dispatch({type: actions.setInitialStateObject})
    form.resetFields();
  }, [dispatch, form])
  
  const title = useMemo(() => {
    if(state.action === 'register') { return 'Adicionar Contato'}
    if(state.action === 'edit') { return 'Editar Contato'}
    return 'Contato'
  }, [state]);

  useEffect(()=>{}, [state]);

  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <PhoneOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            {title}
          </Col>
        </Row>
      }
      visible={state.showModal.addNewContact}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
      <FormAddNewContact state={state} form={form} dispatch={dispatch} /> 
    </Modal>
  )
};