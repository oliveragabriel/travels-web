import { Row, Col } from 'antd';
import { useCallback } from 'react';
import { Table } from '../../components';
import { actions } from '../reducer/actions/actions';
import { columns } from './columns';

export const TablePreviousTrips = ({ state, dispatch = () => {} }) => {

  const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])

  return (
    <>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table columns={columns(handleEdit)} size="small"  dataSource={state.user.travels.previousTravels}/>
        </Col>
      </Row>
    </>
  )
};