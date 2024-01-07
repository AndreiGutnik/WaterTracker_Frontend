
// import { Component} from "react";
import Icons from '../../images/sprite.svg';
import { useAuth } from "../../hooks/useAuth";
import { updateUserData } from "../../redux/auth/operations";
import { useState } from 'react';
import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import React, { useRef } from "react";

import {
    Form,
    FormCheck,
    LabelName,
    GenderRadio,
    Formy,
    FormText,
    InputGenderRadio,
    LabelGender,
    InputFormControl,
    PasswordDiv,
    IconShowButton,
    ButtonPrimaryDiv,
    BtnPrimartButton,
} from './FormSetting.styled';

export const FormSetting = () => {
    const { user } = useAuth();
    const [name = user.name, setName] = useState();
    const [gender = user.gender, setGender] = useState();
    const [email = user.email, setEmail] = useState();
    const { password = '', setPassword} = useState();
    const [newPassword = '', setNewPassword] = useState();
    const [repeatPassword = '', setRepeatPassword] = useState();
    const dispatch = useDispatch();
    // const [showPassword, setShowPassword] = useState(false);
//     const [showNewPassword, setNewRepeatPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    let isSubmit = true;

    
    const state = {
        photo: '',
        gender: gender,
        name:name,
        email: email,
        password: password,
        newPassword: newPassword,
        repeatPassword: repeatPassword,
        onClick: 'false',
        showPassword: 'false',
    }

    const handleChangePassword = (e) => {    
        setRepeatPassword(e.target.value);
    }

    const handleChangeNewPassword = (e) => { 
        setNewPassword(e.target.value);
    }

    const handleChangeOldPassword = (e) => {
        setPassword(e.target.value);
    }

     const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChange = (e) => {
        setGender(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUserDataSubmit(e);
       
    }

    const updateUserDataSubmit = (e) =>{
        console.log(state);
        console.log(isSubmit);
        isSubmit = false;
      dispatch(updateUserData(state));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormCheck>
                <LabelName>Your gender identity</LabelName>
                <GenderRadio>
                    <InputGenderRadio type="radio" name="gender" id='female' value="female" onChange={handleChange} checked={gender === 'female'} />
                        <LabelGender>Girl</LabelGender><br />
                    <InputGenderRadio type="radio" name="gender" id='male' value="male" onChange={handleChange} checked={gender === 'male'} />
                        <LabelGender>Man</LabelGender><br />                         
                </GenderRadio>
            </FormCheck>
                <Formy>
                    <LabelName>Your name</LabelName>
                    <InputFormControl name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                        onChange={handleChangeName} value={name} placeholder="Name" />
                </Formy>
                <Formy>
                    <LabelName>Email address</LabelName>
                    <InputFormControl name="email"
                        type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                        onChange={handleChangeEmail} value={email} placeholder="Email" />
                </Formy>         
                <Formy>
                    <LabelName>Password</LabelName>
                    <FormText>Outdated password:</FormText>
                <PasswordDiv>
                    <IconShowButton
                        onClick={() => setPassword({ showPassword: !state.showPassword })}
                    >
                        {state.showPassword ?
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-show'}></use></svg> :
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-hide'}></use></svg>}
                    </IconShowButton>
                        <InputFormControl name="password" type={state.showPassword ? "text" : "password"}
                            className="form-control pass" id="exampleInputPassword1"
                            onChange={handleChangeOldPassword}
                            value={password}
                            placeholder="Password"
                            />
                    </PasswordDiv>
                </Formy>       
            <Formy>
                <FormText>New Password:</FormText>
                <PasswordDiv>
                    <IconShowButton onClick={() => setPassword({ showPassword: !state.showPassword })}>
                        {state.showPassword ?
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-show'}></use></svg> :
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-hide'}></use></svg>}
                    </IconShowButton>
                    <InputFormControl name="newPassword" type={state.showPassword ? "text" : "password"}
                        className="form-control pass" id="exampleInputPassword2"
                        onChange={handleChangeNewPassword}
                        value={newPassword}
                        placeholder="Password"   
                    />  
                </PasswordDiv>
            </Formy>
            <Formy>
                <FormText>Repeat new password:</FormText>
                <PasswordDiv>
                    <IconShowButton
                        onClick={() => setPassword({ showPassword: !state.showPassword })}
                    >
                        {state.showPassword ?
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-show'}></use></svg> :
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-hide'}></use></svg>}
                    </IconShowButton>
                    <InputFormControl name="repeatPassword" type={state.showPassword ? 'text' : 'password'}
                         id="exampleInputPassword3"
                        onChange={handleChangePassword}
                        value={repeatPassword}
                        placeholder="Password"
                        
                    />
                </PasswordDiv>
            </Formy>
                <ButtonPrimaryDiv>
                    <BtnPrimartButton disabled={!isSubmit} type="submit">Save</BtnPrimartButton>
                </ButtonPrimaryDiv>
            </Form>

    )
}

    

export default FormSetting