import { AppButton, AppText, AppTextInput } from '@/components/shared';
import { useLoginMutation } from '../usecases/auth/useLoginMutation';
import { useSearchParams } from 'react-router';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const { mutateAsync, isPending, error } = useLoginMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.target) {
      console.log('event target not found');
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const err = await mutateAsync({
      username,
      password,
    });

    if (!err) {
      const redirectTo = searchParams.get('redirectTo');
      if (redirectTo) {
        window.location.href = redirectTo;
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <div className='w-full max-w-96 mx-auto h-screen flex flex-col items-center justify-center px-4'>
      <AppText variant={'heading-lg'}>Login.</AppText>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full mt-8'>
        <AppTextInput
          onChangeText={() => {}}
          label='Username'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          required
        />
        <AppTextInput
          onChangeText={() => {}}
          label='Password'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <AppButton type='submit' isLoading={!!isPending}>
          {isPending ? 'Submitting...' : 'Sign in'}
        </AppButton>
        <AppText className='text-danger text-center'>{error?.message}</AppText>
      </form>
    </div>
  );
};

export default LoginPage;
