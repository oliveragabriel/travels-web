import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table } from '../../../components';
import { columns } from './columns';
import { actions } from '../reducer/actions';
import { Context } from '../Travels';

export const TableNextTrips = () => {
  const {state, dispatch} = useContext(Context);

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])

  const handlePlanning = useCallback((record) => dispatch({type: actions.controlShowModalDaysPlanning, payload: true}), [dispatch])
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Table rowKey='id' columns={columns(handleEdit, handlePlanning)} size="small"  dataSource={state.travels.nextTravels}/>
        </Col>
      </Row>
    </>
  )
};