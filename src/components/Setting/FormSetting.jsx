
// import { Component} from "react";
import './FormSetting.css';
import Icons from "../../images/sprite.svg";
import { useAuth } from "../../hooks/useAuth";
import { useState } from 'react';

import { Form, FormCheck, LabelGenderName, GenderRadio, LabelRadioGen, FormCheckInput} from './FormSetting.styled';



 
const FormSetting = () => {
    const { user } = useAuth()
    // const{setState} = useState(null)
    console.log(user.name)
    
    const [state,setState] = useState({
        photo: '',
        gender: 'girl',
        name: '',
        email: '',
        password: '',
        newPassword: '',
        repeatPassword: '',
        isChecked: 'true',
        onClick: 'false',
        showPassword: 'false',

    })

    const handleChange = ({ target }) => {
        setState({
            [target.name]: target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    // const handleCheck = ({ target: { checked } }) => {
    //     setState({
    //         isChecked: checked,
    //     })
    // }

    const handleGender = ({ target }) => {
        setState({ gender: target.value })
    }


        return (
            <Form onSubmit={handleSubmit}>
                {/* <div className="form"> */}
                    <FormCheck>
                        <LabelGenderName>Your gender identity</LabelGenderName>
                        <GenderRadio>
                            {/* <div className="gender-radio"> */}
                                <LabelRadioGen  htmlFor="gender-1">
                                <FormCheckInput type="radio" id="female" name="gender"
                                    onChange={handleGender}
                                    value='female'
                                    checked={user.gender} />
                                    <span className="rad"></span>
                                    <span className="form-check-gender">Girl</span>
                                </LabelRadioGen>
                            {/* </div> */}
                    
                            {/* <div className="gender-radio"> */}
                                <label className="gender-radio-gen" htmlFor="gender-2">
                                <input type="radio" id="male" className="form-check-input gender-radio-gen" name="gender"
                                    onChange={handleGender}
                                    value='male'
                                    checked={user.gender} />
                                    <span className="rad"></span>
                                    <span className="form-check-gender">Man</span>
                                </label>
                            {/* </div> */}
                        </GenderRadio>
                    </FormCheck>

                    <div className="inputy">
                        <label htmlFor="exampleInputName" className="form-label">Your name</label>
                        <input name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                            onChange={handleChange}
                            value={user.name}
                            placeholder="Name"
                            required
                        />
                    </div>
                    
                    <div className="inputy">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"
                            type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={user.email}
                            placeholder="Email"
                            required
                        />
                    </div>
            
                    <div className="inputy">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div id="emailHelp" className="form-text">Outdated password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => setState({ showPassword: !state.showPassword })}>
                                {state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="password" type={state.showPassword ? "text" : "password"}
                                className="form-control pass" id="exampleInputPassword1"
                                onChange={handleChange}
                                value={user.password}
                                placeholder="Password"
                                required
                            />
                        
                        </div>
                    
                        <div id="emailHelp" className="form-text">New Password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => setState({ showPassword: !state.showPassword })}>
                                {state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="newPassword" type={state.showPassword ? "text" : "password"}
                                className="form-control pass" id="exampleInputPassword2"
                                onChange={handleChange}
                                value={user.newPassword}
                                placeholder="Password"
                                required
                            />
                        
                        </div>

                        <div id="emailHelp" className="form-text">Repeat new password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => setState({ showPassword: !state.showPassword })}>
                                {state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="repeatPassword" type={state.showPassword ? "text" : "password"}
                                className="form-control" id="exampleInputPassword3"
                                onChange={handleChange}
                                value={user.repeatPassword}
                                placeholder="Password"
                                required
                            />
                        </div>
        
                    </div>
                {/* </div> */}
                <div className="button-primary">
                <button disabled={!state.isChecked} type="submit" className="btn btn-primary">Save</button>
               </div>
            </Form>
            
        )
    }
    

export default FormSetting