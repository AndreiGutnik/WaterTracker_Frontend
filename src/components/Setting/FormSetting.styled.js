import styled from "styled-components";
// import { baseTheme } from '../../components/theme.js';

export const Form = styled.form`
display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 24px;
`

export const FormCheck = styled.div`
width: 256px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
`

export const LabelGenderName = styled.label`
font-family: 'RobotoBold';
            font-size: 18px;
            font-weight: 500;
            line-height: 20px;
`

export const GenderRadio = styled.div`
display: flex;
        align-items: flex-start;
`
        
 export const LabelRadioGen = styled.div`
display: flex;
    align-items: flex-start;
    margin-right: 24px;
`       

     export const FormCheckInput = styled.div`
width: 14px;
        height: 14px;
        display: none;
`        