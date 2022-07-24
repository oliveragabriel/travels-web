import { Row, Col } from 'antd';
import { Table, Button } from '../../components';
import { columns } from './columns';
import { actions } from '../reducer/actions';
import { useCallback } from 'react';

export const TableNextTrips = ({ state, dispatch = () => {} }) => {

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewTrip}), [dispatch])

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Nova Viagem'
            onClick={() => handleAdd()}
          >
            Adicionar Nova Viagem
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table columns={columns(handleEdit)} size="small"  dataSource={state.user.travels.nextTravels}/>
        </Col>
      </Row>
    </>
  )
};