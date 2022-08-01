import React, { useCallback } from "react";
import { Form } from 'antd';
import { FormLogin } from './Form';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Modal } from "../..";

export const ModalLogin = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm();

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  return (
    <Modal
      title='Acessar Conta'
      visible={visible}
      icon={<UserSwitchOutlined />}
      handleCancel={() => handleCancel()}
      content={<FormLogin form={form} closeFn={closeFn} />}
    />
  )
};