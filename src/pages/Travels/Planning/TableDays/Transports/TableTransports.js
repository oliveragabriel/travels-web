import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table, Button } from '../../../../../components';
import { columns } from './columns';
import { actions } from '../../../reducer/actions';
import { Context } from '../../../Travels';

export const TableTransports = () => {
  const {state, dispatch} = useContext(Context);

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewTrip}), [dispatch])
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Novo Transporte'
            onClick={() => handleAdd()}
          >
            Adicionar Novo Transporte
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table columns={columns()} size="small" />
        </Col>
      </Row>
    </>
  )
};