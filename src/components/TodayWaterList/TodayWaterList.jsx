import sprite from '../../images/sprite.svg';
import {
  AddBtnStyle,
  DeleteBtn,
  EditBtn,
  ListItem,
  TextTime,
  TextVolume,
  TodayStyle,
  InfoWrap,
  WrapBtn,
} from './TodayList.styled';
// import { useDispatch } from 'react-redux';

export const TodayWaterList = () => {
  //   const dispatch = useDispatch();

  const onEdit = () => {
    // dispatch(editeRecord());
  };
  const onDelete = id => {
    // dispatch(deleteRecord(id));
  };

  return (
    <div>
      <TodayStyle>Today</TodayStyle>
      <ul>
        <ListItem>
          <InfoWrap>
            <svg>
              <use href={sprite + '#cup'}></use>
            </svg>
            <TextVolume>250 ml</TextVolume>
            <TextTime>09:00</TextTime>
          </InfoWrap>

          <WrapBtn>
            <EditBtn onClick={() => onEdit()}>
              <svg>
                <use href={sprite + '#edit'}></use>
              </svg>
            </EditBtn>

            <DeleteBtn onClick={() => onDelete()}>
              <svg>
                <use href={sprite + '#trash'}></use>
              </svg>
            </DeleteBtn>
          </WrapBtn>
        </ListItem>
      </ul>
      <AddBtnStyle>
        <svg>
          <use href={sprite + '#plus'}></use>
        </svg>
        Add water
      </AddBtnStyle>
    </div>
  );
};
