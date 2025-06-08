import { AppText } from '@/components/shared';

export const Header = () => {
  return (
    <header className='p-4 pl-2'>
      <div className='bg-background border border-grey rounded-2xl px-4 min-h-14 flex flex-row items-center'>
        <div className='flex-1 flex flex-row justify-center items-center'>
          <section className='w-full h-full'>
            <label></label>
            <input
              placeholder='Search...'
              className='pl-2 pr-4 outline-none w-full h-14'
            />
          </section>
        </div>
        <section id='user-and-notification'>
          <div className='flex flex-row gap-2 items-center'>
            <AppText>The Admin</AppText>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-grey/10'>
              TA
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};
