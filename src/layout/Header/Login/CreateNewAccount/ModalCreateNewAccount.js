import React, { useCallback, useContext } from "react";
import { Form } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../../utils/styles";
import { Context } from "../../Header";
import { Modal } from "../../../../components";
import { FormCreateNewAccount } from "./Form";

export const ModalCreateNewAccount = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);
  
  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalAddNewUser, payload: false});
    form.resetFields();
  }, [dispatch, form])

  return (
    <Modal
      title='Cadastrar Nova Conta'
      visible={state.showModal.addNewUser}
      icon={<UserAddOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormCreateNewAccount form={form} />}
    />
  )
}