import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table } from '../../components';
import { actions } from '../reducer/actions/actions';
import { Context } from '../Travels';
import { columns } from './columns';

export const TablePreviousTrips = () => {
  const {state, dispatch} = useContext(Context);

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])

  const handlePlanning = useCallback((record) => dispatch({type: actions.controlShowModalDaysPlanning, payload: true}), [dispatch])

  return (
    <>
      <Row style={{ marginTop: 44 }}>
        <Col span={24}>
          <Table columns={columns(handleEdit, handlePlanning)} size="small"  dataSource={state.travels.previousTravels}/>
        </Col>
      </Row>
    </>
  )
};