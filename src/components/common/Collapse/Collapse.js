import React from "react";
import { Row, Col, Collapse } from "antd";
import { StyledCollapse } from "./styled";
import { Table } from "../Table";

export const CollapseWithTable = ({
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
}) => {
    return (
      <StyledCollapse>
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
      </StyledCollapse>
    );
  }