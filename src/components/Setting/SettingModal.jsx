import { useState } from 'react';
import Setting from './Setting';
import HeaderSetting from './HeaderSetting';
import UploadImage from './UploadImage';
import FormSetting from './FormSetting';
import { nanoid } from '@reduxjs/toolkit';
import { ContainerModal } from './SettingModal.styled';


const SettingModal = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  const showModal = () => setIsShowModal(true)
  
  const closeModal = () => setIsShowModal(false)

function createUser(data) {
const newUser = {
  ...data,
 id: nanoid(),
 }
 console.log('newUser :>>', newUser)
 }
    
  return (
    <ContainerModal>
  <HeaderSetting  showModal={showModal} />
         {isShowModal && (
        <Setting closeModal={closeModal}
        >
          <UploadImage createUser={createUser} />
          <FormSetting createUser={createUser} />
        </Setting>)}
      </ContainerModal>
  )
}

// class SettingModal extends Component {
//   state = {
//     isShowModal: false,
//     }

//     showModal = () => {
//         this.setState({isShowModal:true})
//     }
    

//     closeModal = () =>{
//         this.setState({isShowModal:false})
//   }


//   createUser=(data) => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//     }
//     console.log('newUser :>>', newUser)
//   }


  
//   render() {
//     return(
//       <div className='container modal'>
//     <HeaderSetting  showModal={this.showModal} />
//         {this.state.isShowModal && (<Setting closeModal={this.closeModal} handleClose={this.handleClose} ><UploadImage createUser={ this.createUser} /><FormSetting createUser={ this.createUser} /></Setting>)}
//       </div>
//   )
// }
// }

  

export default SettingModal