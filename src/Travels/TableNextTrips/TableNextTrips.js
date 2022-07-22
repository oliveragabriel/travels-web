import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { Table, Button } from '../../components';
import { columns } from './columns';
import { actions } from '../../reducer/actions';

export const TableNextTrips = ({setAction = () => {}, travels, dispatch = () => {} }) => {
  useEffect(() => {},[travels]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type='primary'
            title='Adicionar Nova Viagem'
            onClick={() => {
              dispatch({type: actions.controlShowModalAddNewTrip, payload: true});
              setAction('register');
            }}
          >
            Adicionar Nova Viagem
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col span={24}>
          <Table columns={columns(setAction, dispatch)} size="small"  dataSource={travels}/>
        </Col>
      </Row>
    </>
  )
};