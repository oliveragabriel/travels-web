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
import { userMock } from "../Layout/Header/MyPerfil/userMock";

export const Travels = ({state, dispatch = () => {}}) => {
  const [loading, setLoading] = useState(false);
  
  const getLoggedUserData = useCallback(async () => {
    try {
      setLoading(true);
      // const resp = await 
      dispatch({type: actions.setLoggedUserData, payload: userMock});
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: requestGenericTextMsg.error
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => getLoggedUserData(), [getLoggedUserData]);

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