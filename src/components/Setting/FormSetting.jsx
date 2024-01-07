
// import { Component} from "react";
import './FormSetting.css';
import Icons from "../../images/sprite.svg";
import { useAuth } from "../../hooks/useAuth";
import { updateUserData } from "../../redux/auth/operations";
import { useState } from 'react';
import { useDispatch } from "react-redux";

import {
    Form,
    FormCheck,
    LabelName,
    GenderRadio,
    Formy,
    FormText
} from './FormSetting.styled';



 
export const FormSetting = () => {
    const { user } = useAuth();
    const [name = user.name, setName ]=useState();
    const [gender = user.gender, setGender] = useState();
    const [email = user.email, setEmail ]= useState();
    const [password = user.password, setPassword] = useState();
    const [newPassword = '', setNewPassword] = useState();
    const [repeatPassword = '', setRepeatPassword] = useState();
    const { showPassword } = useState();
    const dispatch  = useDispatch()
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
                    <input type="radio" name="gender" id='female' value="female" onChange={handleChange} checked={gender === 'female'} />
                        <label htmlFor="age-range-1">Girl</label><br />
                    <input type="radio" name="gender" id='male' value="male" onChange={handleChange} checked={gender === 'male'} />
                        <label htmlFor="age-range-2">Man</label><br />                         
                </GenderRadio>
            </FormCheck>
                <Formy>
                    <LabelName>Your name</LabelName>
                    <input name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                        onChange={handleChangeName} value={name} placeholder="Name" required/>
                </Formy>
                <Formy>
                    <LabelName>Email address</LabelName>
                    <input name="email"
                        type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                        onChange={handleChangeEmail} value={email} placeholder="Email" required/>
                </Formy>         
                <Formy>
                    <LabelName>Password</LabelName>
                    <FormText>Outdated password:</FormText>
                    <div className="passwordClass">
                        <input name="password" type={showPassword ? "text" : "password"}
                            className="form-control pass" id="exampleInputPassword1"
                            onChange={handleChangeOldPassword}
                            value={password}
                            placeholder="Password"
                            required/>
                    </div>
                </Formy>       
            <Formy>
                <FormText>New Password:</FormText>
                <div className="passwordClass">
                    <i className="show-button" onClick={() => setPassword({ showPassword: !state.showPassword })}>
                        {state.showPassword ?
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-show'}></use></svg> :
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-hide'}></use></svg>}
                    </i>
                    <input name="newPassword" type={state.showPassword ? "text" : "password"}
                        className="form-control pass" id="exampleInputPassword2"
                        onChange={handleChangeNewPassword}
                        value={newPassword}
                        placeholder="Password"
                        required
                    />       
                </div>
            </Formy>
            <Formy>
                <FormText>Repeat new password:</FormText>
                <div className="passwordClass">
                    {/* <i className="show-button"
                        onClick={() => setPassword({ showPassword: !state.showPassword })}>
                        {state.showPassword ?
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-show'}></use></svg> :
                            <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                <use href={Icons + '#eye-hide'}></use></svg>}
                    </i> */}
                    <input name="repeatPassword" type={state.showPassword ? "text" : "password"}
                        className="form-control" id="exampleInputPassword3"
                        onChange={handleChangePassword}
                        value={repeatPassword}
                        placeholder="Password"
                        required
                    />
                </div>
            </Formy>
                <div className="button-primary">
                    <button disabled={!isSubmit} type="submit" className="btn btn-primary">Save</button>
                </div>
            </Form>

    )
}

    

export default FormSetting