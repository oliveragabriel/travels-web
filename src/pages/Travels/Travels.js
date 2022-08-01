import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Row, Col, Collapse, Divider, notification, Calendar, Button } from "antd";
import { 
    GlobalOutlined, 
    CheckCircleOutlined, 
    ClockCircleOutlined,
    PlusCircleTwoTone
} from '@ant-design/icons';
import { styleIconSizeThirtyAndGhost, styleIconSizeTwentyAndColor } from '../../utils/styles';
import { TableNextTrips } from './TableNextTrips'
import { TablePreviousTrips } from "./TablePreviousTrips";
import { requestGenericTextMsg } from "../../utils/messages";
import { ModalAddNewTravel } from '../../components';
import { travelsMock } from "./travelsMock";
import { travelsReducer, initialState } from './reducer';
import { actions } from "./reducer/actions";
import { ModalDaysPlanning } from "./Planning/ModalDaysPlanning";
import { ModalAddNewAcommodation, ModalAddNewTransport, ModalTransport } from "./Planning/TableDays";

export const Context = React.createContext({state: {}, dispatch: () => {}});

export const Travels = () => {
  const [state, dispatch] = useReducer(travelsReducer, initialState)
  const [loading, setLoading] = useState(false)
  const [showModalAddNewTravel, setShowModalAddNewTravel] = useState(false)

  const handleAdd = useCallback(() => setShowModalAddNewTravel(true), [])
  
  const getLoggedUserData = useCallback(() => {
    try {
      setLoading(true);
      // const resp =  
      dispatch({type: actions.setLoggedUserData, payload: travelsMock});
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => getLoggedUserData(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])

  return (
    <Context.Provider value={{state, dispatch}}>
      <ModalAddNewTravel visible={showModalAddNewTravel} closeFn={setShowModalAddNewTravel} />
      <ModalDaysPlanning />
      <ModalAddNewAcommodation />
      <ModalTransport />
      <ModalAddNewTransport />
      <Row gutter={12} style={{ marginBottom: 12 }}>
        <Col span={24}>
          <Divider>
          <Button 
            type='primary'
            icon={<PlusCircleTwoTone />}
            title='Adicionar Nova Viagem'
            onClick={() => handleAdd()}
            style={{ height: 40 }}
          >
            Adicionar Nova Viagem
          </Button>
          </Divider>
        </Col>
      </Row>
      <Row gutter={12} style={{ marginBottom: 24 }}>
        <Col sm={24} md={12}>
          <Collapse>
            <Collapse.Panel 
              header={
                <Row>
                  <Col>
                    Próximas Viagens
                  </Col>
                </Row>} 
              key="nextTravels"
              extra={<ClockCircleOutlined style={styleIconSizeTwentyAndColor}/>}
            >
              <TableNextTrips
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
        <Col sm={24} md={12}>
          <Collapse>
            <Collapse.Panel 
              header={
                <Row>
                  <Col>
                    Viagens Anteriores
                  </Col>
                </Row>} 
              key="previousTravels"
              extra={<CheckCircleOutlined style={styleIconSizeTwentyAndColor}/>}
            >
              <TablePreviousTrips
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
      <Row>
        <Col span={24}>
          <Calendar />
        </Col>
      </Row>
    </ Context.Provider>
  )
};