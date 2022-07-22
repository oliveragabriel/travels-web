import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { Table } from '../../components';
import { columns } from './columns';

export const TablePreviousTrips = ({ setAction = () => {}, travels, dispatch = () => {} }) => {
  useEffect(() => {},[travels]);
  return (
    <>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table columns={columns(setAction, dispatch)} size="small"  dataSource={travels}/>
        </Col>
      </Row>
    </>
  )
};