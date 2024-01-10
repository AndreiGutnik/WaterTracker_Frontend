import { ThreeDots } from 'react-loader-spinner';
import { baseTheme } from '../theme';
import { createPortal } from 'react-dom';

const loaderModal = document.querySelector('#loadermodal-root');

export default function Loader() {
  return createPortal(
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color={baseTheme.colors.blue}
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ariaLabel="three-dots-loading"
      wrapperClassName=""
      visible={true}
    />,
    loaderModal
  );
}
