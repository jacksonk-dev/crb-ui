import { useMutation } from '@tanstack/react-query';
import { Button, Image, message, Spin } from 'antd';
import { FormEvent, useState } from 'react';
import { CiUser as UserIcon } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

import { useActiveCRB } from 'src/app/core/services/app';
import { requestPasswordReset } from 'src/app/core/services/user';
import Input from 'src/app/shared/components/Input';
import { Logo } from 'src/app/shared/configs/app';

const ForgotPassword: React.FC = () => {
  const activeCRB = useActiveCRB();
  const navigate  = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  const [processing, setProcessing] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return requestPasswordReset(email);
    },
    onSuccess: (data) => {            
      setProcessing(false);

      if(data?.has_error) {
        return messageApi.error(data?.api_code_description || 'Could not request password reset, something went wrong.', 5);
      } else {        
        messageApi.open({
          type: 'success',
          content: 'Password Reset Request Sent.',
          duration: 3,
        })
          .then(() => message.info("You'll receive an email shortly. Please follow the instructions to reset your password.", 5))
          .then(() => {
            navigate('/login');
          });
      }
      
    },
    onError: () => {
      setProcessing(false);
    }
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if(email){
      mutation.mutate();
    }

  };

  return (
    <>
      {contextHolder}
      <div className='h-full w-full flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 place-items-center	 justify-center w-full sm:w-[60%] md:w-[512px] z-10'>
          <form className='grid grid-cols-1 gap-6 w-full place-items-center' onSubmit={onSubmit}>
            <div className='h-28 w-28 flex justify-center items-center bg-white m-auto'>
              <Image src={Logo[activeCRB]} />
            </div>
            <Input
              disabled={processing} 
              required={true}
              type='email'
              size="large" 
              placeholder="Username/Email" 
              prefix={<UserIcon className='text-xl mr-2' />} 
              className='w-full p-4'
              onChange={setEmail}
            />
            <div className='w-full flex items-center justify-between'>
              <Button           
                className='w-[50%] p-6'
                type="primary"
                htmlType='submit'
                disabled={!email || processing}
              >
                Request Password Reset
              </Button>
              <Link to="/login">
                Back to Login
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

export default ForgotPassword;