import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columnsActivities = (handleEditAdress = () => {}) => [
  {
    title: 'Nome',
    dataIndex: 'adress',
    key: 'adress',
    width: '30%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
        {text.substr(0, 20)}
        {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>,
  },
  {
    title: 'Tipo',
    dataIndex: 'complement',
    key: 'complement',
    width: '25%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 20)}
          {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>
  },
  {
    title: 'Situação',
    dataIndex: 'district',
    key: 'district',
    width: '15%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 20)}
          {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>
  },
  {
    title: 'Ações',
    key: 'actions',
    width: '20%',
    align: 'center',
    fixed: 'right',
    render: (record) => <Row gutter={8} justify='center'>
      <Col>
        <Button
            type="text"
            title="Editar"
            icon={<EditTwoTone />} 
            onClick={() => handleEditAdress(record)}
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