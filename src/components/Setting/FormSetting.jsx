import { Component } from "react";
import './FormSetting.css';

class FormSetting extends Component{
    state = {
        photo: '',
        gender:'girl',
        name: '',
        email: '',
        password: '', 
        isChecked: 'true',
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]:target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser({
            photo: this.state.photo,
            gender:this.state.gender,
            name:this.state.name,
            email: this.state.email,
            password: this.state.password,
        })

        this.setState({
        photo: '',
        name: '',
        email: '',
        password:'',
        })

        this.props.closeModal()
    }
    
 handleCheck = ({target: { checked } }) => {
     this.setState({
           isChecked: checked,
       })
    }

    handleGender = ({target}) => {
        this.setState({gender:target.value})
    }

    

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form">
        
                <div className="form-check">
                        <label className="form-check-label-gender" htmlFor="exampleCheck1">Your gender identity</label>
                         <div className="gender-radio">
                    <div className="gender-radio">
                        <label  className="gender-radio-gen" htmlFor="gender-1">
                            <input type="radio" id="gender-1" className="form-check-input gender-radio-gen" name="gender" onChange={this.handleGender} value="girl" checked={this.state.gender==='girl'}/>
                            <span className="form-check-gender">Girl</span>
                        </label>
                    </div>
                    
                    <div className="gender-radio">
                        <label className="gender-radio-gen" htmlFor="gender-2">
                            <input type="radio" id="gender-2" className="form-check-input gender-radio-gen" name="gender" onChange={this.handleGender} value="man" checked={this.state.gender==='man'}/>
                            <span className="form-check-gender">Man</span>
                        </label>
                            </div>
                            </div>
                        </div>

            <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Your name</label>
                <input name="name" type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                        onChange={this.handleChange}
                    value={this.state.name}
                />
                    </div>
                    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email"
                    type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                        onChange={this.handleChange}
                    value={this.state.email}
                />
                    </div>
                    
  <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <div id="emailHelp" className="form-text">Outdated password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                        onChange={this.handleChange}
                            value={this.state.password}
                            
                />
    
          <div className="mb-3">
                <div id="emailHelp" className="form-text">New Password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                        onChange={this.handleChange}
                    value={this.state.password}
                />
            </div>
            <div className="mb-3">
                <div id="emailHelp" className="form-text">Repeat new password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                        onChange={this.handleChange}
                    value={this.state.password}
                />
                    </div>  
                    </div>
                    </div>
                    <button disabled={!this.state.isChecked} type="submit" className="btn btn-primary">Save</button>       

            </form>
    )}
}

export default FormSetting