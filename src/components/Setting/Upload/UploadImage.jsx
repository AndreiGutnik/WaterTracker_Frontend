import Icons from '../../../images/sprite.svg';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import { UploadWrapper, Title, Upload, Avatar } from './Upload.styled';

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
    <>
      <Title>Your photo</Title>
      <UploadWrapper>
        <Avatar id="avatar" src={user.avatarURL} />
        <Upload>
          <input
            name="photo"
            type="file"
            onChange={handleChange}
            id="upload"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <svg aria-label="upload picture">
            <use href={Icons + '#upload'}></use>
          </svg>
          <p>Upload a photo</p>
        </Upload>
      </UploadWrapper>
    </>
  );
};

export default UploadImage;
