import { Row, Col, Divider, Steps, Form } from "antd"
import { Card, Table, Input, Button } from '../../components'
import { columnsActivities } from "./columnsActivities"
import { RocketOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

export const Activities = () => {
    const travel = useSelector((state) => state?.selectedTravel)
    const day = useSelector((state) => state?.selectedTravelDay?.day)

    return (
        <>
            <Row>
                <Col span={24}>
                    <Card 
                        title={<Row><Col span={12}>{travel.title?.substr(0, 20)}{travel.title?.length >= 20 ? '...' : ''}</Col><Col span={12}>{day}</Col></Row>} 
                        icon={<RocketOutlined />}
                        content={
                            <Form layout="vertical" initialValues={{ ...travel }}>
                                <Row justify="center" gutter={24}>
                                    <Col span={8}>
                                        <Form.Item 
                                            label='Tipo'
                                            name='type'
                                        >
                                            <Input readOnly disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item 
                                            label='Data de Embarque'
                                            name='arrival'
                                        >
                                            <Input readOnly disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item 
                                            label='Data de Retorno'
                                            name='departure'
                                        >
                                            <Input readOnly disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item 
                                            label='Descrição'
                                            name='description'
                                        >
                                            <Input.TextArea rows={4} readOnly disabled />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        }
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: 12 }}>
                <Col span={24}>
                    <Divider>
                    <Button 
                        type='primary'
                        title='Adicionar Nova Atividade'
                        label='Adicionar Nova Atividade'
                        handleSubmit={() => {}}
                        style={{ height: 40 }}
                    />
                    {/* <ModalAddNewTransport visible={showModalAddNewTransport} closeFn={setShowModalAddNewTransport} /> */}
                    </Divider>
                </Col>
            </Row>
            <Row style={{ marginTop: 12 }}>
                <Col span={8}>
                    <Steps direction="vertical" current={1}>
                        <Steps.Step title="Museu Soymaya" description="Museu" />
                        <Steps.Step title="Casa de los Abuelos" description="Restaurante" />
                        <Steps.Step title="Museu Nacional de Antropologia" description="Museu" />
                    </Steps>
                </Col>
                <Col span={16}>
                    <Table columns={columnsActivities()} size="small" />
                </Col>
            </Row>
        </>
    )
}