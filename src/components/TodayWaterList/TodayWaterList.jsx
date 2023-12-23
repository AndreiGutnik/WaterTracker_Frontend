import { FaGlassWaterDroplet } from 'react-icons/fa6';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { HiOutlineTrash } from 'react-icons/hi2';
import {
  AddBtnStyle,
  DeleteBtn,
  EditBtn,
  ListItem,
  TextTime,
  TextVolume,
  TodayStyle,
  Wrap,
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
          <Wrap>
            <FaGlassWaterDroplet />
            <TextVolume>250 ml</TextVolume>
            <TextTime>09:00</TextTime>
          </Wrap>

          <WrapBtn>
            <EditBtn onClick={() => onEdit()}>
              <HiOutlinePencilSquare color="#9EBBFF" />
            </EditBtn>

            <DeleteBtn onClick={() => onDelete()}>
              <HiOutlineTrash color="#EF5050" />
            </DeleteBtn>
          </WrapBtn>
        </ListItem>
      </ul>
      <AddBtnStyle>+ Add water</AddBtnStyle>
    </div>
  );
};
