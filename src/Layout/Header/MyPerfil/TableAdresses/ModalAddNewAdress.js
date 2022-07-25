import React, { useCallback, useContext, useMemo } from "react";
import { Row, Col, Modal, Form } from 'antd';
import { FormAddNewAdress } from './Form';
import { HomeOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor, styleIconSizeTwenty } from "../../../../utils/styles";
import { Context } from "../../Header";

export const ModalAddNewAdress = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.setInitialStateObject})
    form.resetFields();
  }, [dispatch, form])
  
  const title = useMemo(() => {
    if(state.action === 'register') { return 'Adicionar Endereço'}
    if(state.action === 'edit') { return 'Editar Endereço'}
    return 'Endereço'
  }, [state]);
  
  return (
    <Modal
      width={800}  
      title={
        <Row gutter={[24,0]} align='middle'>
          <Col>
            <HomeOutlined style={styleIconSizeThirtyAndColor}/>
          </Col>
          <Col>
            {title}
          </Col>
        </Row>
      }
      visible={state.showModal.addNewAdress}
      centered
      footer={null}
      onCancel={() => handleCancel()}
      closeIcon={<CloseCircleTwoTone twoToneColor='#ff4d4f' style={styleIconSizeTwenty} />}
    >
        <FormAddNewAdress form={form} /> 
    </Modal>
  )
};