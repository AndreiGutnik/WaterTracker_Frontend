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
export const  SpanRad = styled.div`
display: inline-block;
    margin-right: 8px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid blue;
        position: relative; */

        &::before{
        content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 7px;
    height: 7px;
    background-color: blue;
    opacity: 0;
    border-radius: 50%;
        } 
`       
    