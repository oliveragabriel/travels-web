import { Row, Col } from 'antd';
import { useCallback } from 'react';
import { Table, Button } from '../../../../components';
import { columns } from './columns';
import { actions } from '../../reducer/actions';

export const TableContacts = ({ state, dispatch = () => {} }) => {
  
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
          <Table columns={columns(handleEdit)} size="small"  dataSource={state.user.contacts}/>
        </Col>
      </Row>
    </>
  )
};