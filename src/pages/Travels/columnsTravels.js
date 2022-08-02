import { Row, Col, Button, Tooltip } from "antd";
import { CalendarTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export const columnsTravels = (title, fn1 = () => {}, fn2 = () => {}) => {
  let filteredColumns = [
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
  ]
  if (title === 'Próximas Viagens') {
    filteredColumns.push(
      {
        title: 'Embarque',
        dataIndex: 'departure',
        key: 'departure',
        width: '15%'
      }
    )
  } else {
    filteredColumns.push(
      {
        title: 'Retorno',
        dataIndex: 'arrival',
        key: 'arrival',
        width: '15%'
      }
    )
  }
  filteredColumns.push(
    {
      title: 'Ações',
      key: 'actions',
      width: '15%',
      align: 'center',
      fixed: 'right',
      render: (record) => <Row gutter={8} justify='center'>
        <Col>
          <Button 
            type='text'
            title='Planejamento'
            icon={<CalendarTwoTone />} 
            onClick={() => fn2(record)}
          />      
        </Col>
        <Col>
          <Button
              type="text"
              title="Editar"
              icon={<EditTwoTone />} 
              onClick={() => fn1(record)}
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
  )
  return filteredColumns
}