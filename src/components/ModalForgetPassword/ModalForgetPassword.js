import React, { useCallback } from "react";
import { Form } from 'antd';
import { FormForgetPassword } from './Form';
import { LockOutlined } from '@ant-design/icons';
import { Modal } from "..";

export const ModalForgetPassword = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm();

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  return (
    <Modal
      title='Recuperar Minha Senha'
      visible={visible}
      icon={<LockOutlined />}
      handleCancel={() => handleCancel()}
      content={<FormForgetPassword form={form} />}
    />
  )
}