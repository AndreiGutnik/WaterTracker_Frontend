import { Component } from "react";

class FormSetting extends Component{
    state = {
        photo:'',
        gender:'girl',
        name: '',
        email: '',
        password:''    
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]:target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser({
            photo:this.state.photo,
            // gender: this.state.gender,
            name:this.state.name,
            email: this.state.email,
            password: this.state.password,
            isChecked:false,
        })

        this.setState({
            photo: '',
        name: '',
        email: '',
        password:'',
        })

        this.props.closeModal()
    }
    
 handleCheck = ({target:{checked}}) => {
     this.setState({
           isChecked:checked,
       })
    }

    handleGender = ({target:{value}}) => {
        this.setState({gender:value})
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3 form-photo">
                <label htmlFor="exampleInputPhoto" className="form-label">Your photo
                {/* <input name="photo" type="photo" className="form-check-input" id="exampleCheck1"
                        onChange={this.handleChange}
                            value={this.state.photo} /> */}
                    </label>
                    <label htmlFor="exampleInputPhoto" className="form-label">Upload a photo
                {/* <input name="photo" type="uploadPhoto" className="form-check-input" id="exampleCheck1"
                        onChange={this.handleChange}
                            value={this.state.photo} /> */}
                    </label>
  </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Your gender identity
                        <input name="gender" type="checkbox" className="form-check-input" id="exampleCheck1"
                            checked={this.state.gender}

                        //     checked={this.state.isChecked}
                        onChange={this.handleGender}
                        value='girl'
                    />
                    <option value="Girl">Girl</option>
                        <input name="gender" type="checkbox" className="form-check-input" id="exampleCheck1"
                            checked={this.state.gender}
                            onChange={this.handleGender}
                    //         checked={this.state.isChecked}
                    //     onChange={this.handleCheck}
                        value='man'
                        />
                    <option value="Man">Man</option>
                </label>
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
    </div>
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
  <button disabled={!this.state.isChecked} type="submit" className="btn btn-primary">Save</button>
</form>
    )}
}

export default FormSetting