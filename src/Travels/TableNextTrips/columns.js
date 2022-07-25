import { Row, Col, Button, Tooltip } from "antd";
import { CalendarTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columns = (handleEdit = () => {}, handlePlanning = () => {}) => [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    width: '25%',
    sorter: (a, b) => a.date.localeCompare(b.date),
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
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: text => <Tooltip title={text}>
    <span>
      {text.substr(0, 18)}
      {text.length >= 18 ? '...' : ''}
    </span>
    </Tooltip>
  },
  {
    title: 'Data de Partida',
    dataIndex: 'arrival',
    key: 'arrival',
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
          type='text'
          title='Planejamento'
          icon={<CalendarTwoTone />} 
          onClick={() => handlePlanning()}
        />      
      </Col>
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