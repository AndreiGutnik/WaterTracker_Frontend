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
                        <h3 className="form-check-label-gender" htmlFor="exampleCheck1">Your gender identity</h3>
                        <div className="gender-radio"><input name="gender" type="radio" className="form-check-input" id="exampleRadio1"
                        checked={this.state.gender==='girl'}
                        onChange={this.handleGender}
                        value='girl'
                        />
                        <label className="form-check-gender" htmlFor="exampleCheck1">Girl</label>
                        <input name="gender" type="radio" className="form-check-input" id="exampleRadio1"
                            checked={this.state.gender==='man'}
                            onChange={this.handleGender}
                        value='man'
                        />
                    <label className="form-check-gender" htmlFor="exampleCheck1">Man</label></div>
                </div>
                
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                <input name="name" type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                        onChange={this.handleChange}
                    value={this.state.name}
                />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email"
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
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