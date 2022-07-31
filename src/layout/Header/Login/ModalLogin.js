import React, { useCallback, useContext } from "react";
import { Form } from 'antd';
import { FormLogin } from './Form';
import { UserSwitchOutlined } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../utils/styles";
import { Context } from "../Header";
import { Modal } from "../../../components";

export const ModalLogin = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalLogin, payload: false});
    form.resetFields();
  }, [dispatch, form])

  return (
    <Modal
      title='Acessar Conta'
      visible={state.showModal.login}
      icon={<UserSwitchOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormLogin form={form} />}
    />
  )
};