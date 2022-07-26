import { Row, Col } from 'antd';
import { useCallback, useContext } from 'react';
import { Table } from '../../../../components';
import { actions } from '../../reducer/actions';
import { Context } from '../../Travels';
import { columns } from './columns';

export const TableDays = () => {
  const {state, dispatch} = useContext(Context);

  const handleAccommodation = useCallback(() => dispatch({type: actions.controlShowModalAddNewAcommodation, payload: true}), [dispatch])

  const handleTransport = useCallback(() => dispatch({type: actions.controlShowModalAddNewTransport, payload: true}), [dispatch])

  return (
    <>
      <Row>
        <Col span={24}>
          <Table columns={columns(handleAccommodation, handleTransport)} size="small"  dataSource={state.travels.nextTravels[0].days}/>
        </Col>
      </Row>
    </>
  )
};