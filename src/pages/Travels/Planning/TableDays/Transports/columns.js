import { Row, Col, Button, Tooltip } from "antd";
import { DeleteTwoTone } from '@ant-design/icons';

export const columns = (handleDelete = () => {}) => [
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    width: '15%',
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: 'Local de Embarque',
    dataIndex: 'pickUp',
    key: 'pickUp',
    width: '30%',
    sorter: (a, b) => a.pickUp.localeCompare(b.pickUp),
    render: text => <Tooltip title={text}>
    <span>
      {text.substr(0, 18)}
      {text.length >= 18 ? '...' : ''}
    </span>
    </Tooltip>
  },
  {
    title: 'Local de Destino',
    dataIndex: 'destiny',
    key: 'destiny',
    width: '30%',
    sorter: (a, b) => a.destiny.localeCompare(b.destiny),
    render: text => <Tooltip title={text}>
    <span>
      {text.substr(0, 18)}
      {text.length >= 18 ? '...' : ''}
    </span>
    </Tooltip>
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    width: '15%',
    sorter: (a, b) => Number(b.ddd) - Number(a.ddd)
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'actions',
    width: '10%',
    align: 'center',
    fixed: 'right',
    render: (record) => <Row gutter={8} justify='center'>
      <Col>
        <Button
            type="text"            
            title="Excluir"
            icon={<DeleteTwoTone twoToneColor='#ff4d4f' />} 
            onClick={() => handleDelete(record)}
        />
      </Col>
    </Row>
  }
]