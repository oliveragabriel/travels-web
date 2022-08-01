import React, { useCallback, useReducer } from "react"
import { Form } from 'antd'
import { FormMyPerfil } from './Form'
import { UserOutlined } from '@ant-design/icons'
import { Modal } from "../../../components"
import { headerReducer, initialState } from './reducer'

export const Context = React.createContext({state: {}, dispatch: () => {}});

export const ModalMyPerfil = ({ visible, closeFn = () => {} }) => {
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const [form] = Form.useForm();

  const handleCancel = useCallback(() => {
    closeFn(false);
    form.resetFields();
  }, [closeFn, form])

  return (
    <Context.Provider value={{state, dispatch}}>  
      <Modal
        width={800}
        title='Meu Perfil'
        visible={visible}
        icon={<UserOutlined />}
        handleCancel={() => handleCancel()}
        content={<FormMyPerfil form={form} />}
      />
    </Context.Provider>
  )
}