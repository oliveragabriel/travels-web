import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Row, Col, Divider, notification, Calendar, Button } from "antd";
import { 
    GlobalOutlined, 
    CheckCircleOutlined, 
    ClockCircleOutlined,
    PlusCircleTwoTone
} from '@ant-design/icons';
import { styleIconSizeThirtyAndGhost, styleIconSizeTwentyAndColor } from '../../utils/styles'
import { requestGenericTextMsg } from "../../utils/messages";
import { ModalAddNewTravel } from '../../shared/Modals';
import { travelsMock } from "./travelsMock";
import { travelsReducer, initialState } from './reducer';
import { actions } from "./reducer/actions";
import { ModalDaysPlanning } from "./Planning/ModalDaysPlanning"
import { CollapseWithTable } from "../../components";
import { columnsTravels } from "./columnsTravels";

export const Context = React.createContext({state: {}, dispatch: () => {}});

export const Travels = () => {
  const [state, dispatch] = useReducer(travelsReducer, initialState)
  const [showModalAddNewTravel, setShowModalAddNewTravel] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAdd = useCallback(() => setShowModalAddNewTravel(true), [])

  const handleEdit = useCallback((record) => {
    setShowModalAddNewTravel(true)
    dispatch({type: actions.toogleEditTrip, payload: record})
  }, [dispatch])

  const handlePlanning = useCallback((record) => dispatch({type: actions.controlShowModalDaysPlanning, payload: true}), [dispatch])
  
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
        <Col sm={24} md={12}>
          <CollapseWithTable
            title='Próximas Viagens'
            key="nextTravels"
            extra={<ClockCircleOutlined style={styleIconSizeTwentyAndColor}/>}
            rowKey='id' 
            columns={columnsTravels}
            fn1={handleEdit}
            fn2={handlePlanning}
            size="small"  
            dataSource={state.travels.previousTravels}
          />
        </Col>
        <Col sm={24} md={12}>
          <CollapseWithTable
            title='Viagens Anteriores'
            key="previousTravels"
            extra={<CheckCircleOutlined />}
            rowKey='id' 
            columns={columnsTravels}
            fn1={handleEdit}
            fn2={handlePlanning}
            size="small"  
            dataSource={state.travels.nextTravels}
          />
        </Col>
        <Col span={24}>
          <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
        </Col>
        <Col span={24}>
          <Calendar />
        </Col>
      </Row>
    </ Context.Provider>
  )
};