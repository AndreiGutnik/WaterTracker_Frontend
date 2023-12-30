import { Component } from "react";
import './FormSetting.css';
import  Icons  from "../../images/sprite.svg";


class FormSetting extends Component {
    
    state = {
        photo: '',
        gender: 'girl',
        name: '',
        email: '',
        outdatePassword: '',
        newPassword: '',
        repeatPassword: '',
        isChecked: 'true',
        onClick: 'false',
        showPassword: 'false',
    }
    

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser({
            photo: this.state.photo,
            gender: this.state.gender,
            name: this.state.name,
            email: this.state.email,
            outdatePassword: this.state.outdatePassword,
            newPassword: this.state.outdatePassword,
            repeatPassword: this.state.repeatPassword,
        })

        this.setState({
            photo: '',
            name: '',
            email: '',
            outdatePassword: '',
            newPassword: '',
            repeatPassword: '',
        })

        this.props.closeModal()
    }
    
    handleCheck = ({ target: { checked } }) => {
        this.setState({
            isChecked: checked,
        })
    }

    handleGender = ({ target }) => {
        this.setState({ gender: target.value })
    }
    
    // constructor() {
    //     super();
    //     this.state = {
    //         showPassword: false,
    //     }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form">
        
                    <div className="form-check">
                        <label className="form-check-label-gender" htmlFor="exampleCheck1">Your gender identity</label>
                        <div className="gender-radio">
                            <div className="gender-radio">
                                <label className="gender-radio-gen" htmlFor="gender-1">
                                    <input type="radio" id="gender-1" className="form-check-input gender-radio-gen" name="gender" onChange={this.handleGender} value="girl" checked={this.state.gender === 'girl'} />
                                    <span className="rad"></span>
                                    <span className="form-check-gender">Girl</span>
                                </label>
                            </div>
                    
                            <div className="gender-radio">
                                <label className="gender-radio-gen" htmlFor="gender-2">
                                    <input type="radio" id="gender-2" className="form-check-input gender-radio-gen" name="gender" onChange={this.handleGender} value="man" checked={this.state.gender === 'man'} />
                                    <span className="rad"></span>
                                    <span className="form-check-gender">Man</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="inputy">
                        <label htmlFor="exampleInputName" className="form-label">Your name</label>
                        <input name="name" type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Name"
                        />
                    </div>
                    
                    <div className="inputy">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"
                            type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email"
                        />
                    </div>
            
                    <div className="inputy">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div id="emailHelp" className="form-text">Outdated password:</div>
                        <input name="outdatedPassword" type={this.state.showPassword ? "text" : "password"}
                            className="form-control input-password" id="exampleInputPassword1"
                            onChange={this.handleChange}
                            value={this.state.outdatePassword}
                            placeholder="Password" />
                        <span className="show-button"
                            onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                            {this.state.showPassword ?
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-show'}></use></svg> :
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-hide'}></use></svg>}
                        </span>
                    
                        <div id="emailHelp" className="form-text">New Password:</div>
                        <input name="newPassword" type={this.state.showPassword ? "text" : "password"}
                            className="form-control input-password" id="exampleInputPassword2"
                            onChange={this.handleChange}
                            value={this.state.newPassword}
                            placeholder="Password" />
                        <span className="show-button"
                            onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                            {this.state.showPassword ?
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-show'}></use></svg> :
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-hide'}></use></svg>}
                        </span>

                        <div id="emailHelp" className="form-text">Repeat new password:</div>
                        <input name="repeatPassword" type={this.state.showPassword ? "text" : "password"}
                            className="form-control input-password" id="exampleInputPassword3"
                            onChange={this.handleChange}
                            value={this.state.repeatPassword}
                            placeholder="Password" />
                        <span className="show-button"
                            onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                            {this.state.showPassword ?
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-show'}></use></svg> :
                                <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                    <use href={Icons + '#eye-hide'}></use></svg>}
                        </span>
        
                    </div>
                </div>
                <button disabled={!this.state.isChecked} type="submit" className="btn btn-primary">Save</button>

            </form>
        )
    }
}


export default FormSetting