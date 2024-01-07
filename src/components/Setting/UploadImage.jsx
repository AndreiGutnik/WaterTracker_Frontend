import Icons from '../../images/sprite.svg';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import {
  WrapperPhoto,
  NamePhoto,
  InputPhoto,
  LabelUpload,
  AppPhoto,
  Avatar,
} from './Upload.styled';

const UploadImage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleChange = event => {
    const formData = new FormData();
    if (event.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', event.target.files[0]);
    dispatch(updateAvatar(formData));
  };

  return (
    <WrapperPhoto>
      <NamePhoto>Your photo</NamePhoto>
      <AppPhoto>
        <LabelUpload>
          <Avatar id="avatar" src={user.avatarURL} />
          <InputPhoto
            name="photo"
            type="file"
            onChange={handleChange}
            id="upload"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <svg
            width="16"
            height="16"
            fill="blue"
            aria-label="upload picture"
            component="span"
          >
            <use href={Icons + '#upload'}></use>
          </svg>
          Upload a photo
        </LabelUpload>
      </AppPhoto>
    </WrapperPhoto>
  );
};

export default UploadImage;
