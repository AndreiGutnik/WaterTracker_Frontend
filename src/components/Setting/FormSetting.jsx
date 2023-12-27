import { Component } from "react";

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
                <div className="form"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '24px',
                        marginBottom: '24px'
                          }}>
            {/* <div className="mb-3 form-photo">
                <label htmlFor="exampleInputPhoto" className="form-label">Your photo
                <input name="photo" type="photo" className="form-check-input" id="exampleCheck1"
                        onChange={this.handleChange}
                        // checked={this.state.isChecked}
                            value={this.state.photo} 
                    ></input></label>
                    <label htmlFor="exampleInputPhoto" className="form-label">Upload a photo
                /* <input name="photo" type="uploadPhoto" className="form-check-input" id="exampleCheck1"
                        onChange={this.handleChange}
                            value={this.state.photo} /> 
                    </label>
  </div> */}
                    <div className="form-check"
                        style={{
                        width: '256px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '12px'
                          }}>
                        <h3 className="form-check-label" htmlFor="exampleCheck1"
                            style={{
                                fontFamily: 'RobotoMedium',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '20px' 
                          }}
                        >Your gender identity</h3>
                        <input name="gender" type="radio" className="form-check-input" id="exampleRadio1"
                        checked={this.state.gender==='girl'}
                        onChange={this.handleGender}
                        value='girl'
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Girl</label>
                        <input name="gender" type="radio" className="form-check-input" id="exampleRadio1"
                            checked={this.state.gender==='man'}
                            onChange={this.handleGender}
                        value='man'
                        />
                    <label className="form-check-label" htmlFor="exampleCheck1">Man</label>
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