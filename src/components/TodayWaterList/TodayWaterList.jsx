import { AddWater } from 'components/WterModals/AddWater';
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
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import {
  openAddWater,
  openDeleteWater,
  openEditWater,
} from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';
import { fetchTodayWater } from 'redux/water/operations';
import { selectTodayWater } from 'redux/water/selectors';
import { useEffect } from 'react';
import { DeleteWaterModal } from 'components/WterModals/DeleteWaterModal';

export const TodayWaterList = () => {
  const modal = useSelector(state => state.modals.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayWater());
  }, [dispatch]);

  const { waterNotes } = useSelector(selectTodayWater);

  const onEdit = () => {
    dispatch(openEditWater());
  };
  const onDelete = id => {
    dispatch(openDeleteWater(id));
  };

  return (
    <div>
      <TodayStyle>Today</TodayStyle>
      {waterNotes?.length > 0 ? (
        <ul>
          {waterNotes.map(({ amountWater, date, _id }) => (
            <ListItem key={_id}>
              <InfoWrap>
                <svg>
                  <use href={sprite + '#cup'}></use>
                </svg>
                <TextVolume>{amountWater} ml</TextVolume>
                <TextTime>{date}</TextTime>
              </InfoWrap>

              <WrapBtn>
                <EditBtn onClick={() => onEdit()}>
                  <svg>
                    <use href={sprite + '#edit'}></use>
                  </svg>
                </EditBtn>

                <DeleteBtn onClick={() => onDelete(_id)}>
                  <svg>
                    <use href={sprite + '#trash'}></use>
                  </svg>
                </DeleteBtn>
              </WrapBtn>
            </ListItem>
          ))}
        </ul>
      ) : (
        <p>No records</p>
      )}

      <AddBtnStyle onClick={() => dispatch(openAddWater())}>
        <svg>
          <use href={sprite + '#plus'}></use>
        </svg>
        Add water
      </AddBtnStyle>
      {modal === modalConstants.ADD_WATER && <AddWater />}
      {modal === modalConstants.DELETE_WATER && <DeleteWaterModal />}
      {/* <DeleteWaterModal /> */}
    </div>
  );
};
