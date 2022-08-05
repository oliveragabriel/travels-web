import { Row, Col, Divider, Steps, Form } from "antd"
import { Card, Table, TextArea, Button, FormItem, FlagIcon } from '../../components'
import { columnsActivities } from "./columnsActivities"
import { RocketOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { StyledRow } from './styles'
import { useState } from "react"
import { ModalAddNewActivity } from "../../shared/Modals"

export const Activities = () => {
  const [showModalAddNewActivity, setShowModalAddNewActivity] = useState(false)
  const travel = useSelector((state) => state?.selectedTravel)
  const day = useSelector((state) => state?.selectedTravelDay?.day)

  return (
    <>
      <Row>
        <Col span={24}>
          <Card 
            title={
              <Row justify="space-between">
                <Col span={10}>
                  <FlagIcon code={travel?.country} size='2x' />
                </Col>
                <Col span={14}>
                  Atividades do Dia: {day}
                </Col>
              </Row>} 
            icon={<RocketOutlined />}
            content={
              <Form layout="vertical" initialValues={{ ...travel }}>
                <Row justify="center" gutter={24}>
                  <Col span={12}>
                    <FormItem
                      label='Título'
                      name='title'
                      content={<TextArea rows={2} readOnly disabled />}
                    />
                  </Col>
                  <Col span={12}>
                    <FormItem
                      label='Descrição'
                      name='description'
                      content={<TextArea rows={2} readOnly disabled />}
                    />
                  </Col>
                </Row>
              </Form>
            }
          />
        </Col>
      </Row>
      <StyledRow>
        <Col span={24}>
          <Divider>
          <Button 
              type='primary'
              title='Adicionar Nova Atividade'
              label='Adicionar Nova Atividade'
              handleSubmit={() => setShowModalAddNewActivity(true)}
              style={{ height: 40 }}
          />
          <ModalAddNewActivity visible={showModalAddNewActivity} closeFn={setShowModalAddNewActivity} />
          </Divider>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col span={8}>
          <Steps direction="vertical" current={0}>
            <Steps.Step title="Museu Soymaya" description="Museu" />
            <Steps.Step title="Casa de los Abuelos" description="Restaurante" />
            <Steps.Step title="Museu Nacional de Antropologia" description="Museu" />
          </Steps>
        </Col>
        <Col span={16}>
          <Table columns={columnsActivities()} size="small" />
        </Col>
      </StyledRow>
    </>
  )
}