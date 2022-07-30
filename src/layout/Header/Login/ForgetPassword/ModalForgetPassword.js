import React, { useCallback, useContext } from "react";
import { Form } from 'antd';
import { FormForgetPassword } from './Form';
import { LockOutlined } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../../utils/styles";
import { Context } from "../../Header";
import { Modal } from "../../../../components";

export const ModalForgetPassword = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalForgetPassword, payload: false});
    form.resetFields();
  }, [dispatch, form])

  return (
    <Modal
      title='Recuperar Minha Senha'
      visible={state.showModal.forgetPassword}
      icon={<LockOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormForgetPassword form={form} />}
    />
  )
}