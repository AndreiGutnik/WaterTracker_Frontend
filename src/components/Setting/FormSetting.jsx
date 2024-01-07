import './FormSetting.css';
import { useAuth } from '../../hooks/useAuth';
import { updateUserData } from '../../redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Form,
  FormCheck,
  LabelName,
  GenderRadio,
  Formy,
  FormText,
} from './FormSetting.styled';

export const FormSetting = () => {
  const { user } = useAuth();
  const [name = user.name, setName] = useState();
  const [gender = user.gender, setGender] = useState();
  const [email = user.email, setEmail] = useState();
  let [password, setPassword] = useState('');
  const [newPassword = '', setNewPassword] = useState('');
  const [repeatPassword = '', setRepeatPassword] = useState();
  const dispatch = useDispatch();
  let isSubmit = true;

  const state = {
    gender: gender,
    name: name,
    email: email,
    password: password,
    newPassword: newPassword,
  };

  const handleChangePassword = e => {
    setRepeatPassword(e.target.value);
  };

  const handleChangeNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleChangeOldPassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChange = e => {
    setGender(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    isSubmit = false;
    setNewPassword(newPassword);
    dispatch(updateUserData(state));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormCheck>
        <LabelName>Your gender identity</LabelName>
        <GenderRadio>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleChange}
            checked={gender === 'female'}
          />
          <label htmlFor="age-range-1">Girl</label>
          <br />
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleChange}
            checked={gender === 'male'}
          />
          <label htmlFor="age-range-2">Man</label>
          <br />
        </GenderRadio>
      </FormCheck>
      <Formy>
        <LabelName>Your name</LabelName>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          onChange={handleChangeName}
          value={name}
          placeholder="Name"
          autoComplete="username"
          required
        />
      </Formy>
      <Formy>
        <LabelName>Email address</LabelName>
        <input
          name="email"
          type="email"
          className="form-control"
          id="InputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChangeEmail}
          value={email}
          placeholder="Email"
          autoComplete="email"
          required
        />
      </Formy>
      <Formy>
        <LabelName>Password</LabelName>
        <FormText>Outdated password:</FormText>
        <div className="passwordClass">
          <input
            name="password"
            type={state.showPassword ? 'text' : 'password'}
            className="form-control pass"
            id="exampleInputPassword1"
            onChange={handleChangeOldPassword}
            value={password}
            placeholder="Password"
            autoComplete="password"
          />
        </div>
      </Formy>
      <Formy>
        <FormText>New Password:</FormText>
        <div className="passwordClass">
          <input
            name="newPassword"
            type={state.showPassword ? 'text' : 'password'}
            className="form-control pass"
            id="exampleInputPassword2"
            onChange={handleChangeNewPassword}
            value={newPassword}
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
      </Formy>
      <Formy>
        <FormText>Repeat new password:</FormText>
        <div className="passwordClass">
          <input
            name="repeatPassword"
            type={state.showPassword ? 'text' : 'password'}
            className="form-control"
            id="exampleInputPassword3"
            onChange={handleChangePassword}
            value={repeatPassword}
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
      </Formy>
      <div className="button-primary">
        <button disabled={!isSubmit} type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </Form>
  );
};

export default FormSetting;
