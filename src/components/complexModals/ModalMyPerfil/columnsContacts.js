import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columnsContacts = (handleEditContact = () => {}) => [
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    width: '40%',
    sorter: (a, b) => a.date.localeCompare(b.date),
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
    width: '10%',
    sorter: (a, b) => Number(b.ddd) - Number(a.ddd)
  }, 
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    width: '30%',
    sorter: (a, b) => Number(b.ddd) - Number(a.ddd)
  },
  {
    title: 'Ações',
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
            onClick={() => handleEditContact(record)}
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