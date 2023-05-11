import { Key } from 'react';
import { Listbox } from '@headlessui/react';
import { ISelect, TOption } from './types';
import { FieldValues, useController } from 'react-hook-form';

export const SelectField = <T extends FieldValues>({
  variant = 'lg',
  ...props
}: ISelect<T>) => {
  const getLabel = (value: string) =>
    props.options?.find((item) => item.value === value)?.label;

  const { field } = useController(props);
  return (
    <Listbox {...props} {...field}>
      <div className="flex flex-col gap-y-1 ">
        <Listbox.Label
          className={`font-sans text-black font-bold
              ${variant === 'lg' && 'text-[18px]'}
              ${variant === 'md' && 'text-[16px]'}
              ${variant === 'sm' && 'text-[14px]'}
            `}
          htmlFor={props.name}
        >
          {props.label}{' '}
          {props.required && (
            <span className="text-error-base font-bold ml-1">*</span>
          )}
        </Listbox.Label>

        <div className="relative w-full mt-2">
          <Listbox.Button
            as="button"
            className={`
              px-4  outline-none focus:outline-none w-full bg-white
              
              ${props.disabled && `bg-neutral-100 ring-neutral-400`}
              ${props.success && `ring-success-base ring-1`}
              ${props.error && `ring-error-base ring-1`}
              ${props.warning && `ring-warning-base ring-1`}
              ${
                !props.success &&
                !props.error &&
                !props.warning &&
                `!border-2 !border-[#A3A3A3]`
              }
              
              ${variant === 'lg' && `py-4 rounded-lg`}
              ${variant === 'md' && `py-2 rounded-md`}
              ${variant === 'sm' && `p-1 rounded-md`}
            `}
          >
            {(data) => (
              <div className="flex justify-between items-center">
                <span
                  className={`
                      ${variant === 'lg' && 'text-[16px]'}
                      ${variant === 'md' && 'text-[14px]'}
                      ${variant === 'sm' && 'text-[10px]'}
                      `}
                >
                  {getLabel(data.value) || props.placeholder}
                </span>
                <ChevronDown />
              </div>
            )}
          </Listbox.Button>

          <Listbox.Options className="absolute bg-white w-full drop-shadow-xl z-10 rounded mt-2 ">
            {props.options?.map(
              (data: TOption, key: Key | null | undefined) => (
                <Listbox.Option
                  key={key}
                  value={data.value}
                  className="px-4 py-2 cursor-pointer hover:bg-neutral-100 hover:rounded"
                >
                  <span
                    className={
                      variant === 'lg'
                        ? 'text-[16px]'
                        : variant === 'md'
                        ? 'text-[14px]'
                        : variant === 'sm'
                        ? 'text-[10px]'
                        : ''
                    }
                  >
                    {data.label}
                  </span>
                </Listbox.Option>
              )
            )}
          </Listbox.Options>

          <div className="flex flex-col items-start w-full gap-x-1">
            <span className="text-neutral-600 text-sm mt-1">{props.hint}</span>
            {props.error && (
              <span className={`text-sm text-error-base`}>{props.error}</span>
            )}
            {props.warning && (
              <span className={`text-sm text-warning-base`}>
                {props.warning}
              </span>
            )}
            {props.success && (
              <span className={`text-sm text-success-base`}>
                {props.success}
              </span>
            )}
          </div>
        </div>
      </div>
    </Listbox>
  );
};

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
