import { Row, Col, Button } from "antd";
import { ProfileOutlined, HomeOutlined, CarOutlined, PercentageOutlined } from '@ant-design/icons';

export const columnsDays = (handleAccommodation = () => {}, handleTransport = () => {}, handleActivities = () => {}) => [
  {
    title: 'Data',
    dataIndex: 'day',
    key: 'day',
    width: '40%',
  },
  {
    title: 'Atividades Concluídas',
    dataIndex: 'percentage',
    key: 'percentage',
    align: 'center',
    width: '30%',
    render: (record) => <Row justify="center">
      <Col>
        {record >= 75 ? 
        <div style={{ color: 'green', fontSize: 16, fontWeight: 700 }}>{record}</div> : 
        <div style={{ color: 'gold', fontSize: 16, fontWeight: 700 }}>{record}</div>}
      </Col>
      <Col>
        <PercentageOutlined style={{ color: 'silver' }}/>
      </Col>
    </Row>
  },
  {
    title: 'Ações',
    key: 'actions',
    width: '30%',
    align: 'center',
    fixed: 'right',
    render: (record) => <Row gutter={8} justify='center'>
      <Col>
        <Button 
            type="text"
            title="Atividades"
            icon={<ProfileOutlined style={{ color: '#FF8C00' }}/>} 
            onClick={() => handleActivities(record)}
        />
      </Col>
      <Col>
        <Button 
          type='text'
          title='Hospedagem'
          icon={<HomeOutlined style={{ color: '#1890FF' }}/>} 
          onClick={() => handleAccommodation(record)}
        />      
      </Col>
      <Col>
        <Button
            type="text"
            title="Transportes"
            icon={<CarOutlined style={{ color: '#1890FF' }}/>} 
            onClick={() => handleTransport(record)}
        />
      </Col>
    </Row>
  }
]