import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columns = (handleEdit = () => {}) => [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    width: '25%',
    render: text => <Tooltip title={text}>
      <span>
        {text.substr(0, 18)}
        {text.length >= 18 ? '...' : ''}
      </span>
    </Tooltip>,
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
    width: '25%',
    render: text => <Tooltip title={text}>
    <span>
      {text.substr(0, 18)}
      {text.length >= 18 ? '...' : ''}
    </span>
    </Tooltip>
  },
  {
    title: 'Data de Retorno',
    dataIndex: 'departure',
    key: 'departure',
    width: '20%'
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
        />
      </Col>
    </Row>
  }
]