import { Row, Col } from 'antd';
import { useContext } from 'react';
import { Table } from '../../../components';
// import { actions } from '../reducer/actions/actions';
import { Context } from '../../Travels';
import { columns } from './columns';

export const TableDays = () => {
  const {state} = useContext(Context);

  // const handleEdit = useCallback((record) => dispatch({type: actions.toogleEditTrip, payload: record}), [dispatch])

  // const handlePlanning = useCallback((record) => dispatch({type: actions.controlShowModalDaysPlanning, payload: true}), [dispatch])

  return (
    <>
      <Row>
        <Col span={24}>
          <Table columns={columns()} size="small"  dataSource={null}/>
        </Col>
      </Row>
    </>
  )
};