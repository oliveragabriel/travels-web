import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table, Button } from '../../../../components';
import { columns } from '../columnsAddresses';
import { actions } from '../../reducer/actions';
import { Context } from '../../Header';

export const TableAdresses = () => {
  const {state, dispatch} = useContext(Context);

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewAdress}), [dispatch])

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditAdress, payload: record}), [dispatch])
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Endereço'
            onClick={() => handleAdd()}
          >
            Adicionar Endereço
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table rowKey='id' columns={columns(handleEdit)} size="small"  dataSource={state.user.adresses}/>
        </Col>
      </Row>
    </>
  )
};