import { Collapse } from "antd";
import styled from 'styled-components';

export const StyledCollapseTable = styled(Collapse)`
    .ant-collapse-header {
        justify-content: space-between;
    }
    .ant-collapse-expand-icon {
        font-size: 18px;
    }
    .ant-collapse-header-text {
        text-transform: uppercase;
        padding: 4px;
    }
    &.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-extra {
        margin-left: 0;
    }
    .ant-collapse-extra {
        font-size: 20px;
        color: #FF8C00;
    }
`;

export const StyledCollapseAdress = styled(Collapse)`
    .ant-collapse-extra {
        color: #FF8C00;
    }
`;