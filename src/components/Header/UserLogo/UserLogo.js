import Icons from "../../../images/sprite.svg"
import { WrapperBtn } from "./UserLogo.styled";

export const UserLogo=()=>{
    
    return (<><WrapperBtn type="button">
        <p>UserName</p>
        <div><img alt="logoUser"/></div>
        <svg width="16" height="16">
              <use href={Icons + '#arrow-down'}></use>
            </svg>
    </WrapperBtn></>);

}