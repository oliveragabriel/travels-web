import { Row, Col, Button } from "antd";
import { ProfileOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';

export const columns = (handleAccommodation = () => {}, handleTransport = () => {}) => [
  {
    title: 'Data',
    dataIndex: 'day',
    key: 'day',
    width: '70%',
  },
  {
    title: 'Ações',
    dataIndex: '',
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
            onClick={() => console.log(record)}
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