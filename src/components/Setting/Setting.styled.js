import styled from "styled-components";
import { baseTheme } from '../../components/theme.js';

export const WrapperModalSetting = styled.div`
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
`

export const ModalShow = styled.div`
display: block;
            padding: 32px 12px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 24px;
            border-radius: 10px;
`

export const  HeaderSettingModal = styled.div`
 display: flex;
            align-items: center;
            gap: 52px;

             @media screen and (min-width: 768px) {
            gap: 452px;
        }

 @media screen and (min-width: 1440px) {
            gap: 756px;
            border: 1px solid #000;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
`

export const  HeaderSettingName = styled.h2`
 font-family: 'RobotoBold';
    width: 180px;
            font-size: 26px;
            font-weight: 500;
            line-height: 32px;
            text-align: left;
`

export const  ButtonClose = styled.span`
 fill: ${baseTheme.colors.blue};
`