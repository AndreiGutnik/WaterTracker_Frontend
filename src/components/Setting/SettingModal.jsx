import { Component } from 'react';
import Setting from './Setting';
import HeaderSetting from './HeaderSetting';
import UploadImage from './UploadImage';
import FormSetting from './FormSetting';
import { nanoid } from '@reduxjs/toolkit';


class SettingModal extends Component {
  state = {
    isShowModal: false,
    }

    showModal = () => {
        this.setState({isShowModal:true})
    }
    

    closeModal = () =>{
        this.setState({isShowModal:false})
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
    <HeaderSetting  showModal={this.showModal} />
        {this.state.isShowModal && (<Setting closeModal={this.closeModal} handleClose={this.handleClose} ><UploadImage createUser={ this.createUser} /><FormSetting createUser={ this.createUser} /></Setting>)}
      </div>
  )
}
}

  

export default SettingModal