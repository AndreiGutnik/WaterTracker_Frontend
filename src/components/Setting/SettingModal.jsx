import { Component } from 'react';
import Setting from './Setting';
import HeaderSetting from './HeaderSetting';
import FormSetting from './FormSetting';

class SettingModal extends Component {
  state = {
    isShowModal:false,
    }

    showModal = () => {
        this.setState({isShowModal:true})
    }

    closeModal = () =>{
        this.setState({isShowModal:false})
    }
  render() {
    return(
        <div className='container'>
    <HeaderSetting showModal={this.showModal}/>
        {this.state.isShowModal && (<Setting closeModal={this.closeModal}><FormSetting/></Setting>)}
    </div>
  )
}
  }
  

export default SettingModal