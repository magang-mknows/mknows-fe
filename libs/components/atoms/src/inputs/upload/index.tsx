import { ReactElement } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { FieldValues } from 'react-hook-form';
import { TUploadFieldProps } from './types';

export const UploadField = <T extends FieldValues>(
  props: TUploadFieldProps<T>
): ReactElement => {
  return (
    <section className="flex flex-col mb-6">
      {props.hasLabel && (
        <label
          htmlFor={props.name}
          className={'font-medium text-neutral-800 text-sm'}
        >
          {props.label}{' '}
          {props.required && <span className="text-red-700 font-bold">*</span>}
        </label>
      )}

      <label htmlFor={props.name}>
        <section
          className={`${
            props.error && ' border-error-400'
          } flex overflow-hidden border rounded-lg mt-4 mb-2`}
        >
          <div className="w-full flex items-center">
            <h1 className="bg-primary-500 w-fit text-white py-2 cursor-pointer hover:bg-primary-600 transition-colors ease-in-out duration-300 px-4 rounded-l-lg">
              Pilih File
            </h1>
            <p
              className={`${
                props.error ? 'text-error-500 italic' : ''
              } px-4 text-xs`}
            >
              {props.files ? (
                <span>
                  {props.files}
                  {props.error && ' (erorr uploading file)'}
                </span>
              ) : (
                'Tidak ada file yang dipilih'
              )}
            </p>
          </div>
          <div className="min-w-[120px] lg:min-w-[150px]">
            <p className="px-4 py-3 lg:py-2 bg-[#E9F6FD] text-neutral-600 text-xs lg:text-sm">
              {props.accepted}
            </p>
          </div>
        </section>
      </label>
      {props.error && (
        <div className="flex items-center w-full gap-x-1 text-xs">
          <AiFillWarning className="text-warning-500" />
          <span className="text-warning-500">{props.error}</span>
        </div>
      )}

      <input
        {...props}
        id={props.name}
        type="file"
        className={`${
          props.error &&
          !props.warning &&
          !props.success &&
          'focus:outline-1 focus:ring-error-600 focus:border-1 bg-red-50 border-2 border-red-600'
        } hidden
        
        
        ${
          props.success &&
          !props.warning &&
          !props.error &&
          'focus:outline-1 focus:ring-success-600 focus:border-1 bg-green-50 border-2 border-green-600'
        }
        
        ${
          props.warning &&
          !props.success &&
          !props.error &&
          'focus:outline-1 focus:ring-yellow-600 focus:border-1 bg-yellow-50 border-2 border-yellow-600'
        }
        
        ${
          !props.warning &&
          !props.error &&
          !props.success &&
          'focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300'
        }

           rounded-lg p-4 outline-none focus:outline-none
        `}
      />
    </section>
  );
};
