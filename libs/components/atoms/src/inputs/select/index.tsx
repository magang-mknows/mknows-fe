import { ReactElement } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { TSelectFieldProps } from './types';
import OptionField from './option-field';
import { FieldValues } from 'react-hook-form';

export const SelectField = <T extends FieldValues>({
  error,
  required,
  label,
  name,
  value,
  onChange,
  disabled = false,
  options,
  className,
}: TSelectFieldProps<T>): ReactElement => {
  console.log();
  return (
    <section className="flex flex-col">
      <label
        htmlFor={name}
        className={'block text-md font-medium text-[#10002E] dark:text-white'}
      >
        {label}
      </label>
      <select
        id={name}
        required={required}
        className={className}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <OptionField
            key={index}
            value={option.value}
            label={option.label}
            className={option.className}
          />
        ))}
      </select>
      {error && (
        <div className="flex items-center w-full gap-x-1">
          <RiErrorWarningFill className="text-red-600" />
          <span className="text-red-600">{error}</span>
        </div>
      )}
    </section>
  );
};
