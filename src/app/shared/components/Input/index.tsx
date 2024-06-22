import { Input } from 'antd';

import { TextInputType } from 'src/app/shared/types/inputs';

type Props = { 
  type?: TextInputType;
  onChange: (a: string) => unknown;
  [key: string]: unknown;
}

const InputField = ({ onChange, type, ...otherProps }: Props) => {
  return (
    <Input 
      type={type}
      onChange={(e) => onChange(e.target.value)}
      {...otherProps}
    />
  );
};

export default InputField;