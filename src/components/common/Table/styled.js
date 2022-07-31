import { Table } from "antd";
import styled from 'styled-components';

const StyledTable = styled(Table)`
  .ant-table-thead>tr>th {
    color: #A9A9A9;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }
`;

export { StyledTable as Table };