import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { Form } from 'antd';
import { FormAddNewContact } from './Form';
import { PhoneOutlined } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../../utils/styles";
import { Context } from "../../Header";
import { Modal } from "../../../../components";

export const ModalAddNewContact = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.setInitialStateObject})
    form.resetFields();
  }, [dispatch, form])
  
  const title = useMemo(() => {
    if(state.action === 'register') { return 'Adicionar Contato'}
    if(state.action === 'edit') { return 'Editar Contato'}
    return 'Contato'
  }, [state]);

  useEffect(() => {
    form.resetFields();
    setTimeout(() => form.setFieldsValue({...state.editing.contact}), 0);
  }, [state.editing.contact, form]);

  return (
    <Modal
      width={800}
      title={title}
      visible={state.showModal.addNewContact}
      icon={<PhoneOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormAddNewContact form={form} />}
    />
  )
};