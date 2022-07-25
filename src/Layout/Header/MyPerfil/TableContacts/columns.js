import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columns = (handleEdit = () => {}) => [
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    width: '35%',
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 30)}
          {text.length >= 30 ? '...' : ''}
      </span>
    </Tooltip>,
  },
  {
    title: <span title="Código de Área (DDD)">Cód.</span>,
    dataIndex: 'ddd',
    key: 'ddd',
    width: '10%'
  }, 
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    width: '35%'
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'actions',
    width: '10%',
    align: 'center',
    fixed: 'right',
    render: (record) => <Row gutter={4} justify='center'>
      <Col>
        <Button
            type="text"
            title="Editar"
            icon={<EditTwoTone />} 
            onClick={() => handleEdit(record)}
        />
      </Col>
      <Col>
        <Button 
            type="text"
            title="Excluir"
            icon={<DeleteTwoTone twoToneColor='#ff4d4f' />} 
            onClick={(record)}
        />
      </Col>
    </Row>
  }
]