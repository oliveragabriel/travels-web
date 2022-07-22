import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Collapse, Divider, notification } from "antd";
import { 
    GlobalOutlined, 
    CheckCircleOutlined, 
    ClockCircleOutlined 
} from '@ant-design/icons';
import { styleIconSizeThirtyAndGhost, styleIconSizeTwentyAndColor } from '../utils/styles';
import { TableNextTrips } from './TableNextTrips'
import { TablePreviousTrips } from "./TablePreviousTrips";
import { requestGenericTextMsg } from "../utils/messages";
import { ModalAddNewTrip } from './ModalAddNewTrip';

export const Travels = ({state, dispatch = () => {}}) => {
  const [user, setUser] = useState({
    username: 'Gabriel',
    birth: '',
    nacionality: 'Brazil',
    hometown: 'Florianópolis',
    contacts: [
      {
        email: 'g.olivera@gmail.com',
        ddd: '048',
        phone: '99951728'
      }
    ],
    adresses: [
      {
        adress: 'Rua José Jacques',
        complement: 'Ap 301 - Em frente a Sanduícheria da Mafalda',
        number: '163',
        district: 'Centro',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brasil',
        zipcode: '88020080'
      }
    ],
    nextTravels: [
      {
        title: 'Egito 2023',
        description: 'Viagem em família ao Egito - 10 dias - Cairo, Alexandria e Luxor.',
        arrival: '',
        departure: '',
        type: 'Lazer',
        quantity: 4,
      }
    ],
    previousTravels: [
      {
        title: 'México 2022',
        description: 'Viagem em família ao México - 20 dias - Cancún, Playa del Carmen e Ciudad de México.',
        arrival: '',
        departure: '',
        type: 'Lazer',
        quantity: 4,
      }
    ]
  });
  const [action, setAction] = useState('');
  const [loading, setLoading] = useState(false);

  const getUserTravels = useCallback( async () => {
    try {
      setLoading(true);
      // const resp = await 'functionplace'
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserTravels()
  }, [state, action, getUserTravels]);

  return (
    <>
      <ModalAddNewTrip action={action} state={state} dispatch={dispatch} />
      <Row>
        <Col span={24}>
          <Collapse>
            <Collapse.Panel 
              header={
                <Row>
                  <Col>
                    Próximas Viagens
                  </Col>
                </Row>} 
              key="1"
              extra={<ClockCircleOutlined style={styleIconSizeTwentyAndColor}/>}
            >
              <TableNextTrips
                setAction={setAction}
                travels={user.nextTravels} 
                dispatch={dispatch} 
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
      <Row gutter={12}>
        <Col span={24}>
          <Collapse>
            <Collapse.Panel 
              header={
                <Row>
                  <Col>
                    Viagens Anteriores
                  </Col>
                </Row>} 
              key="1"
              extra={<CheckCircleOutlined style={styleIconSizeTwentyAndColor}/>}
            >
              <TablePreviousTrips 
                setAction={setAction}
                travels={user.previousTravels} 
                dispatch={dispatch} 
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
      <Row gutter={12}>
        <Col span={12}>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </>
  )
};