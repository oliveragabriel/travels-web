import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table, Button } from '../../../../components';
import { columns } from '../columnsContacts';
import { actions } from '../../reducer/actions';
import { Context } from '../../Header';

export const TableContacts = () => {
  const {state, dispatch} = useContext(Context);

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewContact}), [dispatch])

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditContact, payload: record}), [dispatch])

  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Contato'
            onClick={() => handleAdd()}
          >
            Adicionar Contato
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table rowKey='id' columns={columns(handleEdit)} size="small"  dataSource={state.user.contacts}/>
        </Col>
      </Row>
    </>
  )
};