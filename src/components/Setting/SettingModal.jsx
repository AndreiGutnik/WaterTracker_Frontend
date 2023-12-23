import { Component } from 'react';
import Setting from './Setting';
import Header from './HeaderSetting';

class SettingModal extends Component {
  state = {
    isShowModal:false,
    }

    showModal = () => {
        this.setState({isShowModal:true})
    }

    closeModal = ()=>{
        this.setState({isShowModal:false})
    }
  render() {
    return(
        <div className='container'>
    <Header showModal={this.showModal}/>
       {this.state.isShowModal && <Setting closeModal={this.closeModal}></Setting>}
    </div>
  )
}
  }
  

export default SettingModal