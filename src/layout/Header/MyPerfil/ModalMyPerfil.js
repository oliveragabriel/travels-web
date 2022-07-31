import React, { useCallback, useContext } from "react";
import { Form } from 'antd';
import { FormMyPerfil } from './Form';
import { UserOutlined } from '@ant-design/icons';
import { actions } from '../reducer/actions';
import { styleIconSizeThirtyAndColor } from "../../../utils/styles";
import { Context } from "../Header";
import { Modal } from "../../../components";

export const ModalMyPerfil = () => {
  const [form] = Form.useForm();
  const {state, dispatch} = useContext(Context);

  const handleCancel = useCallback(() => {
    dispatch({type: actions.controlShowModalMyPerfil, payload: false});
    form.resetFields();
  }, [dispatch, form])

  return (  
    <Modal
      width={800}
      title='Meu Perfil'
      visible={state.showModal.myPerfil}
      icon={<UserOutlined style={styleIconSizeThirtyAndColor}/>}
      handleCancel={() => handleCancel()}
      content={<FormMyPerfil form={form} />}
    />
  )
}