import { Row, Col, Button, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { actions } from "../../reducer/actions";

export const columns = (setAction = () => {}, dispatch = () => {}) => [
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
    title: 'Data de Chegada',
    dataIndex: 'arrival',
    key: 'arrival',
    width: '20%',
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 15)}
          {text.length >= 15 ? '...' : ''}
      </span>
    </Tooltip>
  },
  {
    title: 'Data de Saída',
    dataIndex: 'departure',
    key: 'departure',
    width: '20%',
    render: text => <Tooltip title={text}>
      <span>
          {text.substr(0, 15)}
          {text.length >= 15 ? '...' : ''}
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
    render: () => <Row gutter={8} justify='center'>
      <Col>
        <Button
            type="text"
            title="Editar"
            icon={<EditTwoTone />} 
            onClick={() => {
              dispatch({type: actions.controlShowModalAddNewTrip, payload: true});
              setAction('edit');
            }}
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