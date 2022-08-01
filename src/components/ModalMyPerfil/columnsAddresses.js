import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columnsAddresses = (handleEditAdress = () => {}) => [
  {
    title: 'Endereço',
    dataIndex: 'adress',
    key: 'adress',
    width: '25%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
        {text.substr(0, 20)}
        {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>,
  },
  {
    title: 'Complemento',
    dataIndex: 'complement',
    key: 'complement',
    width: '20%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 20)}
          {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>
  },
  {
    title: 'Bairro',
    dataIndex: 'district',
    key: 'district',
    width: '20%',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 20)}
          {text.length >= 20 ? '...' : ''}
      </span>
    </Tooltip>
  },
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city',
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