
import { Component} from "react";
import './FormSetting.css';
import Icons from "../../images/sprite.svg";


class FormSetting extends Component {
   
    state = {
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
        messege: "",
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
            password: this.state.password,
            newPassword: this.state.outdatePassword,
            repeatPassword: this.state.repeatPassword,
        })

        this.setState({
            photo: '',
            name: '',
            email: '',
            password: '',
            newPassword: '',
            repeatPassword: '',
            messege: "Submission Successful!",
        })

        // this.props.closeModal()
    }
    
    handleCheck = ({ target: { checked } }) => {
        this.setState({
            isChecked: checked,
        })
    }

    handleGender = ({ target }) => {
        this.setState({ gender: target.value })
    }


    //     handleClose = (() => {
    //       const close = (e) => {
    //         if(e.keyCode === 27){
    //           this.props.onCloseModal()
    //         }
    //       }
    //       window.addEventListener('keydown', close)
    //     return () => window.removeEventListener('keydown', close)
    //   },[])


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
                        <input name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Name"
                            required
                        />
                    </div>
                    
                    <div className="inputy">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"
                            type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email"
                            required
                        />
                    </div>
            
                    <div className="inputy">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div id="emailHelp" className="form-text">Outdated password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                                {this.state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="password" type={this.state.showPassword ? "text" : "password"}
                                className="form-control pass" id="exampleInputPassword1"
                                onChange={this.handleChange}
                                value={this.state.password}
                                placeholder="Password"
                                required
                            />
                        
                        </div>
                    
                        <div id="emailHelp" className="form-text">New Password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                                {this.state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="newPassword" type={this.state.showPassword ? "text" : "password"}
                                className="form-control pass" id="exampleInputPassword2"
                                onChange={this.handleChange}
                                value={this.state.newPassword}
                                placeholder="Password"
                                required
                            />
                        
                        </div>

                        <div id="emailHelp" className="form-text">Repeat new password:</div>
                        <div className="passwordClass">
                            <i className="show-button"
                                onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                                {this.state.showPassword ?
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-show'}></use></svg> :
                                    <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                                        <use href={Icons + '#eye-hide'}></use></svg>}
                            </i>
                            <input name="repeatPassword" type={this.state.showPassword ? "text" : "password"}
                                className="form-control" id="exampleInputPassword3"
                                onChange={this.handleChange}
                                value={this.state.repeatPassword}
                                placeholder="Password"
                                required
                            />
                        </div>
        
                    </div>
                </div>
                <div className="button-primary">
                <button disabled={!this.state.isChecked} type="submit" className="btn btn-primary">Save</button>
               </div>
                    {this.state.messege ? <h2>{this.state.messege}</h2> : null}
            </form>
            
        )
    }
}
    

export default FormSetting