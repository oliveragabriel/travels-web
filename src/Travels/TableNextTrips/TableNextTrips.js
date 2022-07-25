import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table, Button } from '../../components';
import { columns } from './columns';
import { actions } from '../reducer/actions';
import { Context } from '../Travels';

export const TableNextTrips = () => {
  const {state, dispatch} = useContext(Context);

  const handleAdd = useCallback(() => dispatch({type: actions.toogleAddNewTrip}), [dispatch])

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])

  const handlePlanning = useCallback((record) => dispatch({type: actions.controlShowModalDaysPlanning, payload: true}), [dispatch])
  
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
          <Table columns={columns(handleEdit, handlePlanning)} size="small"  dataSource={state.travels.nextTravels}/>
        </Col>
      </Row>
    </>
  )
};