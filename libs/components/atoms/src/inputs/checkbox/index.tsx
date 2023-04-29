import { FC, ReactElement } from 'react';
import { ICheckbox } from './types';
import { useController } from 'react-hook-form';

export const Checkbox: FC<ICheckbox> = ({
  variant = 'lg',
  ...props
}): ReactElement => {
  const { field } = useController(props);
  return (
    <label
      htmlFor={props.name}
      className={`
       ${props.className} 
       ${props.disabled && 'text-grey-500'}
       ${variant === 'lg' && 'text-[18px]'}
       ${variant === 'md' && 'text-[16px]'}
       ${variant === 'sm' && 'text-[14px]'}
       `}
    >
      <input
        {...field}
        {...props}
        type="checkbox"
        id={props.name}
        className="mr-2 accent-primary-base"
      />
      {props.label}
    </label>
  );
};
