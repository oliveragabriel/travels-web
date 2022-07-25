import { Row, Col, Button } from "antd";
import { ProfileOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';

export const columns = () => [
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
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
            icon={<ProfileOutlined />} 
            onClick={() => {}}
        />
      </Col>
      <Col>
        <Button 
          type='text'
          title='Hospedagem'
          icon={<HomeOutlined />} 
          onClick={() => {}}
        />      
      </Col>
      <Col>
        <Button
            type="text"
            title="Transportes"
            icon={<CarOutlined />} 
            onClick={() => {}}
        />
      </Col>
    </Row>
  }
]