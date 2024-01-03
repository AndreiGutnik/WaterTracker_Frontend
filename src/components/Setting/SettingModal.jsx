import { Component } from 'react';
import Setting from './Setting';
import HeaderSetting from './HeaderSetting';
import UploadImage from './UploadImage';
import FormSetting from './FormSetting';
import { nanoid } from '@reduxjs/toolkit';
import CloseOnEscape from './CloseOnEscape';


class SettingModal extends Component {
  state = {
    isShowModal: false,
    onEscape: false,
    }

    showModal = () => {
        this.setState({isShowModal:true})
    }
    

    closeModal = () =>{
        this.setState({isShowModal:false})
  }

  onEscape = () =>{
        this.setState({onEscape:false})
  }

  createUser=(data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    }
    console.log('newUser :>>', newUser)
  }


  
  render() {
    return(
      <div className='container modal'>
        {/* <CloseOnEscape onEscape={this.onEscape}> */}
       
    <HeaderSetting  showModal={this.showModal} />
        {this.state.isShowModal && (<Setting closeModal={this.closeModal} handleClose={this.handleClose} ><UploadImage createUser={ this.createUser} /><FormSetting createUser={ this.createUser} /><CloseOnEscape closeModal={this.closeModal}/></Setting>)}
      {/* </CloseOnEscape> */}
      </div>
  )
}
}

  

export default SettingModal