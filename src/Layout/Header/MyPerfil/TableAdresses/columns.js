import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columns = ({ handleEdit = () => {} }) => [
  {
    title: 'Endereço',
    dataIndex: 'adress',
    key: 'adress',
    width: '25%',
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