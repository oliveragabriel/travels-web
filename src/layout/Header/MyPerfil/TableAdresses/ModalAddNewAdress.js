import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { Form } from 'antd';
import { FormAddNewAdress } from './Form';
import { HomeOutlined } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../../utils/styles";
import { Context } from "../../Header";
import { Modal } from "../../../../components";

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

  useEffect(() => {
    form.resetFields();
    setTimeout(() => form.setFieldsValue({...state.editing.adress}), 0);
  }, [state.editing.adress, form])
  
  return (
    <Modal
      width={800}
      title={title}
      visible={state.showModal.addNewAdress}
      icon={<HomeOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormAddNewAdress form={form} />}
    />
  )
};