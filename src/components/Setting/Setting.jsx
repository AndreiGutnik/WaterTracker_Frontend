import Icons from "../../images/sprite.svg";
import { ModalShow, HeaderSettingModal, HeaderSettingName, ButtonClose, WrapperModalSetting } from "./Setting.styled";

const Setting = ({ children, closeModal }) => {
   
        return (
            <ModalShow>
                    <HeaderSettingModal>
                        <HeaderSettingName>Setting</HeaderSettingName>
                        <ButtonClose onClick={closeModal}>
                            <svg width="24" height="24">
                                <use href={Icons + '#close'}></use>
                            </svg>
                        </ButtonClose>
                    </HeaderSettingModal>
                    <WrapperModalSetting>{children}</WrapperModalSetting>
                </ModalShow>
    )
    }


export default Setting
