import React, { useCallback, useContext } from "react";
import { Form } from 'antd';
import { FormChangePassword } from './Form';
import { UnlockOutlined } from '@ant-design/icons';
import { actions } from '../../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../../utils/styles";
import { Context } from "../../Header";
import { Modal } from "../../../../components";

export const ModalChangePassword = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalChangePassword, payload: false});
    form.resetFields();
  }, [dispatch, form])

  return (
    <Modal
      title='Alterar Senha'
      visible={state.showModal.changePassword}
      icon={<UnlockOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormChangePassword form={form} />}
    />
  )
};