import { Component } from "react";

class FormSetting extends Component{
    state = {
        gender:'',
        name: '',
        email: '',
        password:''    
    }

    handleChange = ({target}) => {
        this.setState({})
    }
    render() {
        return <form>
            <div className="mb-3 form-photo">
    <label htmlFor="exampleInputEmail1" className="form-label">Your photo</label>
    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
  </div>
            <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Your gender identity
                    <input name="gender" type="checkbox" className="form-check-input" id="exampleCheck1"
                        onChange={this.handleChange}
                    />
                    <option value="Girl">Girl</option>
                    <input name="gender" type="checkbox" className="form-check-input" id="exampleCheck1"
                    onChange={this.handleChange}
                    /> 
                    <option value="Man">Man</option>
                </label>
            </div>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={this.handleChange}
                />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email"
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={this.handleChange}
                    value='123'
                />
  </div>
  <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <div id="emailHelp" className="form-text">Outdated password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                    onChange={this.handleChange}
                />
    </div>
          <div className="mb-3">
                <div id="emailHelp" className="form-text">New Password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
                <div id="emailHelp" className="form-text">Repeat new password:</div>          
                <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                onChange={this.handleChange}/>
    </div>      
  <button type="submit" className="btn btn-primary">Save</button>
</form>
    }
}

export default FormSetting