import React, { useCallback } from "react";
import { Form } from 'antd';
import { FormChangePassword } from './Form';
import { UnlockOutlined } from '@ant-design/icons';
import { Modal } from "../../../components";

export const ModalChangePassword = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm();

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  return (
    <Modal
      title='Alterar Senha'
      visible={visible}
      icon={<UnlockOutlined />}
      handleCancel={() => handleCancel()}
      content={<FormChangePassword form={form} />}
    />
  )
};