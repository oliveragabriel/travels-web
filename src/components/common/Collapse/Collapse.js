import React from 'react'
import { Row, Col, Collapse } from 'antd'
import { HomeOutlined, InfoCircleOutlined, FieldNumberOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { StyledCollapseTable, StyledCollapseAdress } from './styled'
import { Table } from '../Table'
import { FormItem } from '../FormItem'
import { Input } from '../Input'
import { CountrySelector } from '../../CountrySelector'

export function CollapseWithTable({
  title, 
  key, 
  icon, 
  rowKey, 
  columns = () => {}, 
  fn1 = () => {}, 
  fn2 = () => {}, 
  fn3 = () => {}, 
  tableSize, 
  dataSource 
}) {
  return (
    <StyledCollapseTable>
      <Collapse.Panel 
        header={
          <Row>
            <Col>
              {title}
            </Col>
          </Row>} 
        key={key}
        extra={icon}
      >
        <Table 
          rowKey={rowKey}
          columns={columns(title, fn1, fn2, fn3)} 
          size={tableSize}  
          dataSource={dataSource}
        />
      </Collapse.Panel>
    </StyledCollapseTable>
  )
}


export function CollapseAdressInfo() {
  return (
    <StyledCollapseAdress>
      <Collapse.Panel 
        header={
          <Row>
            <Col>
                  Endereço
            </Col>
          </Row>} 
        key='adress'
        extra={<HomeOutlined />}
      >
        <Row gutter={8} align='bottom'>
          <Col span={12}>
            <FormItem
              name='adress'
              label='Endereço'
              content={
                <Input 
                  placeholder='Digite seu Endereço'
                  addonAfter={<HomeOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='complement'
              label='Complemento'
              content={
                <Input
                  placeholder='Digite um Complemento'
                  addonAfter={<InfoCircleOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='number'
              label='Número'
              content={
                <Input 
                  placeholder='Digite um Número'
                  addonAfter={<FieldNumberOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='district'
              label='Bairro'
              content={
                <Input
                  placeholder='Digite seu Bairro'
                  addonAfter={<HomeOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='city'
              label='Cidade'
              content={
                <Input 
                  placeholder='Digite sua Cidade'
                  addonAfter={<HomeOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='state'
              label='Estado'
              content={
                <Input
                  placeholder='Digite seu Estado'
                  addonAfter={<HomeOutlined />}
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='country'
              label='País'
              content={
                <CountrySelector 
                  placeholder='Escolha um país'
                  allowClear
                  showSearch
                  optionFilterProp="label"
                />
              }
            />
          </Col>
          <Col span={12}>
            <FormItem
              name='zipcode'
              label='CEP'
              content={
                <Input
                  placeholder='Digite seu CEP'
                  addonAfter={<EnvironmentOutlined />}
                />
              }
            />
          </Col>
        </Row>
      </Collapse.Panel>
    </StyledCollapseAdress>
  )
}