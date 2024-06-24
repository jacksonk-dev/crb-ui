import { useMutation } from '@tanstack/react-query';
import { Button, Image, message, Spin } from 'antd';
import { FormEvent, useState } from 'react';
import { CiLock as PasswordIcon, CiUser as UserIcon } from 'react-icons/ci';
import { IoEyeOffOutline as HidePasswordIcon, IoEyeOutline as ShowPasswordIcon } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { useActiveCRB } from 'src/app/core/services/app';
import { logUserIn } from 'src/app/core/services/user';
import Input from 'src/app/shared/components/Input';
import { Logo } from 'src/app/shared/configs/app';
import { UserForm } from 'src/app/shared/types/form';
import { TextInputType } from 'src/app/shared/types/inputs';

const LoginPage: React.FC = () => {

  const navigate  = useNavigate();
  const [user, setUser] = useState<UserForm>({});
  const [passwordFieldType, setPasswordFieldType] = useState<TextInputType>('password');
  const [messageApi, contextHolder] = message.useMessage();
  const [processing, setProcessing] = useState(false);
  const activeCRB = useActiveCRB();

  const mutation = useMutation({
    mutationFn: () => {
      return logUserIn(user, activeCRB);
    },
    onSuccess: (data) => {  
      setProcessing(false) ; 

      if(data?.error) {
        messageApi.error(data?.error_description || 'Could not login, something went wrong.', 5);
        return;
      }

      
      navigate('/');
    },
    onError: () => {
      setProcessing(false);
    }
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    mutation.mutate();
  };

  return (
    <>
      {contextHolder}
      <div className='h-full w-full flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 place-items-center	 justify-center w-full sm:w-[60%] md:w-[512px]'>
          <div className='h-28 w-28 flex justify-center items-center m-auto border'>
            <Image src={Logo[activeCRB]} />
          </div>
          <form className='grid grid-cols-1 gap-4 w-full place-items-center' onSubmit={onSubmit}>
            <div className='grid grid-cols-1 gap-2 w-full'>
              <Input 
                required={true}
                disabled={processing}
                type='email'
                size="large" 
                placeholder="Username/Email" 
                prefix={<UserIcon className='text-xl mr-2' />} 
                className='w-full p-4'
                onChange={(username) => setUser((currentUser) => ({ ...currentUser, username }))}
              />
              <Input 
                required={true}
                disabled={processing}
                type={passwordFieldType} 
                size="large" 
                placeholder="Password" 
                prefix={<PasswordIcon className='text-xl mr-2' />}
                suffix={
                  passwordFieldType === 'password' 
                    ? <ShowPasswordIcon onClick={() => setPasswordFieldType('text')} className='text-xl opacity-70 cursor-pointer' /> 
                    : <HidePasswordIcon onClick={() => setPasswordFieldType('password')}  className='text-xl opacity-70 cursor-pointer' />
                }
                className='w-full p-4'
                onChange={(password) => setUser((currentUser) => ({ ...currentUser, password }))}
              />
            </div>
            <div className='w-full flex justify-between items-center'>
              <Button           
                className='min-w-[200px] p-6'
                type='primary'
                htmlType='submit'
                disabled={!(user.username && user.password) || processing}
              >
              Login
              </Button>
              <Link to="/request-password-reset">
                Forgot Password
              </Link>
            </div>
          </form>
          <div className={`h-full w-full flex items-center justify-center bg-color-[#F5F5F5] ${processing ? 'opacity-100' : 'opacity-0'}`}>
            <Spin className='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;