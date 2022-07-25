import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Row, Col, Collapse, Divider, notification, Calendar, Form } from "antd";
import { 
    GlobalOutlined, 
    CheckCircleOutlined, 
    ClockCircleOutlined,
    PlusCircleTwoTone
} from '@ant-design/icons';
import { styleIconSizeThirtyAndGhost, styleIconSizeTwentyAndColor } from '../utils/styles';
import { TableNextTrips } from './TableNextTrips'
import { TablePreviousTrips } from "./TablePreviousTrips";
import { requestGenericTextMsg } from "../utils/messages";
import { ModalAddNewTrip } from './ModalAddNewTrip';
import { userMock } from "../Layout/Header/MyPerfil/userMock";
import { travelsReducer, initialState } from './reducer';
import { actions } from "./reducer/actions";
import { locale } from "../utils/calendar/localeObject";
import { Button, Input } from "../components";

export const Travels = () => {
  const [state, dispatch] = useReducer(travelsReducer, initialState);
  const [loading, setLoading] = useState(false);
  
  const getLoggedUserData = useCallback(() => {
    try {
      setLoading(true);
      // const resp =  
      dispatch({type: actions.setLoggedUserData, payload: userMock});
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => getLoggedUserData(), []);

  return (
    <>
      <ModalAddNewTrip state={state} dispatch={dispatch} />
      <Row gutter={12}>
        <Col span={12}>
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
                state={state} 
                dispatch={dispatch} 
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
        <Col span={12}>
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
                state={state} 
                dispatch={dispatch} 
                loading={loading} 
              />
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
      <Row>
        <Col span={24}>
          <Calendar locale={locale} />
        </Col>
      </Row>
    </>
  )
};