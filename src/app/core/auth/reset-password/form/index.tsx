import { useMutation } from '@tanstack/react-query';
import { Button, Image, message, Spin } from 'antd';
import { FormEvent, useState } from 'react';
import { CiLock as PasswordIcon } from 'react-icons/ci';
import { IoEyeOffOutline as HidePasswordIcon, IoEyeOutline as ShowPasswordIcon } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { requestPasswordReset } from 'src/app/core/services/user';
import Input from 'src/app/shared/components/Input';
import { TextInputType } from 'src/app/shared/types/inputs';

const ResetPassword: React.FC = () => {

  const navigate  = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [passwordFieldType, setPasswordFieldType] = useState<TextInputType>('password');

  const [messageApi, contextHolder] = message.useMessage();
  const [processing, setProcessing] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return requestPasswordReset('');
    },
    onSuccess: (data) => {            
      setProcessing(false);

      if(data?.has_error) {
        return messageApi.error(data?.api_code_description || 'Could not request password reset, something went wrong.', 5);
      } else {        
        messageApi.open({
          type: 'success',
          content: 'Password Reset Successfully.',
          duration: 3,
        });

        navigate('/login');
      }
      
    },
    onError: () => {
      setProcessing(false);
    }
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if(password && passwordConfirmation === password){
      mutation.mutate();
    }

  };

  return (
    <>
      {contextHolder}
      <div className='h-full w-full flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 place-items-center	 justify-center w-full sm:w-[60%] md:w-[512px] z-10'>
          <div className='h-28 w-28 flex justify-center items-center bg-white m-auto'>
            <Image src='assets/images/metropol_logo.jpeg' />
          </div>
          <form className='grid grid-cols-1 gap-4 w-full place-items-center' onSubmit={onSubmit}>
            <Input 
              required={true}
              disabled={processing}
              type={passwordFieldType} 
              size="large" 
              placeholder="New Password" 
              prefix={<PasswordIcon className='text-xl mr-2' />}
              suffix={
                passwordFieldType === 'password' 
                  ? <ShowPasswordIcon onClick={() => setPasswordFieldType('text')} className='text-xl opacity-70 cursor-pointer' /> 
                  : <HidePasswordIcon onClick={() => setPasswordFieldType('password')}  className='text-xl opacity-70 cursor-pointer' />
              }
              className='w-full p-4'
              onChange={setPassword}
            />
            <Input 
              required={true}
              disabled={processing}
              type={passwordFieldType} 
              size="large" 
              placeholder="Confirm Password" 
              prefix={<PasswordIcon className='text-xl mr-2' />}
              className='w-full p-4'
              onChange={setPasswordConfirmation}
            />
            <Button           
              className='w-[50%] p-6'
              type="primary"
              htmlType='submit'
              disabled={!(password && passwordConfirmation) || password !== passwordConfirmation || processing}
            >
              Reset Password
            </Button>
          </form>
          <div className={`h-full w-full flex items-center justify-center bg-color-[#F5F5F5] ${processing ? 'opacity-100' : 'opacity-0'}`}>
            <Spin className='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;