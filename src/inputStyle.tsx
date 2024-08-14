import { FC, InputHTMLAttributes } from 'react';
import './inputstyle.css';
import EyesIcon from './assets/svgs/eyes.svg';

interface InputStyleProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isIcon?: boolean;
}

export const InputStyle: FC<InputStyleProps> = ({
  label,
  placeholder,
  isIcon,
  ...props
}) => {
  return (
    <div className='flex flex-col gap-2 justify-center w-full'>
      <p className='label-input'>{label}</p>
      <input className='input' placeholder={placeholder} {...props} />
      {isIcon && <img src={EyesIcon} className='w-6 h-6' />}
    </div>
  );
};
