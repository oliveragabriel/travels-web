import { Input } from "antd";
import styled from 'styled-components';

const StyledInput = styled(Input)`
    &.ant-input[disabled] {
        color: dimgray;
    }
`;

export { StyledInput as Input };