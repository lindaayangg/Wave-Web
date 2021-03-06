import styled from 'styled-components';
import {GridRow, Icon} from "semantic-ui-react";

export const StyledGridRow = styled(GridRow)`
  &&& {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledDropzoneDiv = styled.div`
  &&& {
    position: relative;
    min-height: 320px;
    background-color: #FCF3F2;
    border-color: #FA7268;
    border-width: medium;
    border-style: dotted;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 20px;
    @media (min-width: 2000px) {
      min-height: 410px; 
    }
  }
`;

export const StyledUploadIcon = styled(Icon)`
  &&& {
    margin-top: 10px;
    color: #FA7268;
  }
`;

export const StyledMessage = styled.div`
  &&& {
    font-size: 15px;
  }
`;