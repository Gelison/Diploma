import { Button } from '../components/button/button';
import { Switch } from '../components/Toggle/Toggle';

export const Settings = () => {
  const hendlePrimariButtonClick = () => {
    console.log('clicked');
  };
  return (
    <div className=' -mt-64 pl-80 w-3/4'>
      <div className=' '>
        <h3 className=' text-xl my-2 '>Profil</h3>
        <div className=' bg-dark h-[100px]  rounded-md flex flex-col justify-center'>
          <div className=' flex justify-around  '>
            <div className=' text-sm flex flex-col justify-center'>Name</div>
            <input
              type='username'
              className=' bg-graphite w-80 h-10 rounded-md'
              placeholder='name'
            />
            <div className=' text-sm flex flex-col justify-center'>Email</div>

            <input
              type='email'
              className='bg-graphite w-80 mr-5 h-10 rounded-md'
              placeholder='email'
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className=' text-xl my-2 '>Pasword</h3>
        <div className='bg-dark h-[200px]  rounded-md'>
          <div>
            <form action=''>
              <p className=' text-sm'>Password</p>
              <input
                type='password'
                className=' bg-graphite w-80 h-10 rounded-md'
              />
            </form>
          </div>

          <div>
            <form action=''>
              <p className=' text-sm'>New password</p>
              <input
                type='password'
                className=' bg-graphite w-80 h-10 rounded-md'
              />
            </form>
          </div>
          <div>
            <form action=''>
              <p className=' text-sm'>Confirm password</p>
              <input
                type='password'
                className=' bg-graphite w-80 h-10 rounded-md'
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className=' text-xl my-2'>Color mode</h3>
          <div className='bg-dark h-[60px]  rounded-md'>
            <p className=' text-sm'>Dark</p>
            <p className=' text-secondary'>Use dark theme</p>
          </div>
        </div>
      </div>
      <Button
        type='button'
        text='Save'
        disabled={false}
        onClick={hendlePrimariButtonClick}
      />
    </div>
  );
};
