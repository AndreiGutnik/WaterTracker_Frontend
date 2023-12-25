import { ThreeDots } from 'react-loader-spinner';
import { baseTheme } from '../theme.ts';

export default function Loader() {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color={baseTheme.colors.blue}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
}
