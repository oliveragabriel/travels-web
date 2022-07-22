import { Row, Col } from 'antd';
import { useCallback, useEffect } from 'react';
import { Table, Button } from '../../../../components';
import { columns } from './columns';
import { actions } from '../../reducer/actions';

export const TableAdresses = ({ state, dispatch = () => {} }) => {

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewAdress}), [dispatch])

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditAdress, payload: record}), [dispatch])
  
  useEffect(() => {},[state]);
  
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
          <Table columns={columns(handleEdit)} size="small"  dataSource={state.user.adresses}/>
        </Col>
      </Row>
    </>
  )
};