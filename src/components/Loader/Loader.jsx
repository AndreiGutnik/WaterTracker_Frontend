import { ThreeDots } from 'react-loader-spinner';
import { baseTheme } from '../theme';

export default function Loader() {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color={baseTheme.colors.blue}
      ariaLabel="three-dots-loading"
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
      wrapperClassName=""
      visible={true}
    />
  );
}
