import { AppText } from '@/components/shared';
import { URLS } from '@/config/url.const';
import { useIsLoggedIn } from '@/usecases/auth/useIsLoggedIn';
import { NavLink } from 'react-router';

const NotFoundPage = () => {
  const { isLoggedIn } = useIsLoggedIn();

  const link = isLoggedIn ? URLS.links.v1.dashboard : URLS.links.v1.login;
  const text = isLoggedIn ? 'Go back to the dashboard' : 'Login';

  return (
    <div className='flex flex-col justify-center text-center items-center w-screen h-screen overflow-x-hidden gap-10'>
      <AppText variant={'heading-xl'}>NOT FOUND.</AppText>
      <NavLink to={link}>
        <AppText variant='heading' className='text-link underline'>
          {text}
        </AppText>
      </NavLink>
    </div>
  );
};

export { NotFoundPage };
