import React, { useCallback } from "react";
import { Form } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Modal } from "../../../components";
import { FormCreateNewAccount } from "./Form";

export const ModalCreateNewAccount = ({ visible, closeFn = () => {} }) => {
  const [form] = Form.useForm();
  
  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  return (
    <Modal
      title='Cadastrar Nova Conta'
      visible={visible}
      icon={<UserAddOutlined />}
      handleCancel={() => handleCancel()}
      content={<FormCreateNewAccount form={form} />}
    />
  )
}