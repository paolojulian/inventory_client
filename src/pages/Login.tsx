import { useLoginMutation } from '../usecases/auth/useLoginMutation';

const LoginPage = () => {
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
      // TODO: Add query to support ?redirectTo
      window.location.href = '/';
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input name='username' type='text' placeholder='Username' />
        <input name='password' type='text' placeholder='Password' />
        <button
          type='submit'
          className='bg-black text-white p-4 px-5 cursor-pointer active:scale-95'
          disabled={!!isPending}
        >
          {isPending ? 'Submitting...' : 'Login'}
        </button>
        <p>{error?.message}</p>
      </form>
    </div>
  );
};

export default LoginPage;
