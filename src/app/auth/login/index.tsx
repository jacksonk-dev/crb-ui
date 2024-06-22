import { useMutation } from '@tanstack/react-query';
import { Button, Image, message } from 'antd';
import { FormEvent, useState } from 'react';
import { CiLock as PasswordIcon, CiUser as UserIcon } from 'react-icons/ci';
import { IoEyeOffOutline as HidePasswordIcon, IoEyeOutline as ShowPasswordIcon } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import Input from 'src/app/shared/components/Input';
import { loginUserIn } from 'src/app/shared/services/user';
import { UserForm } from 'src/app/shared/types/form';
import { TextInputType } from 'src/app/shared/types/inputs';

const LoginPage: React.FC = () => {

  const navigate  = useNavigate();
  const [user, setUser] = useState<UserForm>({});
  const [passwordFieldType, setPasswordFieldType] = useState<TextInputType>('password');
  const [messageApi, contextHolder] = message.useMessage();

  const mutation = useMutation({
    mutationFn: () => {
      return loginUserIn(user);
    },
    onSuccess: (data) => {      
      if(data?.error) {
        messageApi.error(data?.error_description || 'Could not login, something went wrong.', 5);
        return;
      }
      
      navigate('/');
    },
    onError: () => {
      
    }
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      {contextHolder}
      <div className='h-full w-full flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 place-items-center	 justify-center w-full sm:w-[60%] md:w-[512px]'>
          <div className='h-28 w-28 flex justify-center items-center bg-white m-auto'>
            <Image src='assets/images/metropol_logo.jpeg' />
          </div>
          <form className='grid grid-cols-1 gap-2 w-full place-items-center' onSubmit={onSubmit}>
            <Input 
              required={true}
              type='email'
              size="large" 
              placeholder="Username/Email" 
              prefix={<UserIcon className='text-xl mr-2' />} 
              className='w-full p-4'
              onChange={(username) => setUser((currentUser) => ({ ...currentUser, username }))}
            />
            <Input 
              required={true}
              type={passwordFieldType} 
              size="large" 
              placeholder="Password" 
              prefix={<PasswordIcon className='text-xl mr-2' />}
              suffix={
                passwordFieldType === 'password' 
                  ? <ShowPasswordIcon onClick={() => setPasswordFieldType('text')} className='text-xl opacity-70' /> 
                  : <HidePasswordIcon onClick={() => setPasswordFieldType('password')}  className='text-xl opacity-70' />
              }
              className='w-full p-4'
              onChange={(password) => setUser((currentUser) => ({ ...currentUser, password }))}
            />
            <Button           
              className='w-[50%] p-6'
              type="primary"
              htmlType='submit'
              disabled={!(user.username && user.password)}
            >
          Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;