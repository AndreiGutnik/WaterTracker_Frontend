import { useAuth } from 'hooks/useAuth';
import Icons from "../../../images/sprite.svg"
import { ThumbImg, WrapperBtn } from "./UserLogo.styled";

export const UserLogo=()=>{
    const {name,avatarURL} = useAuth().user;

    return (<WrapperBtn type="button">
        <p>{name}</p>
        <ThumbImg src={avatarURL} alt="logoUser"/>
        <svg width="16" height="16" fill='#407BFF'>
              <use href={Icons + '#arrow-down'}></use>
            </svg>
    </WrapperBtn>);

}