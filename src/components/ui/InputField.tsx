import React, { useId } from 'react';

interface InputFieldProps {
    id?: string;
    label?: string;
    type?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    leftIcon?: React.ReactNode;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    type = "text",
    value,
    defaultValue,
    placeholder,
    readOnly = false,
    required = false,
    leftIcon,
    className = "",
    inputClassName = "",
    labelClassName = "",
    onChange,
    onBlur,
    onFocus,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label
                htmlFor={inputId}
                className={`text-[#515A69] text-[14px] leading-[20px] font-medium flex items-center gap-1.5 ${labelClassName}`}
            >
                {label}
                {required && (
                    <span className="w-[5px] h-[5px] bg-[#535EE1] rounded-full" aria-hidden="true"></span>
                )}
            </label>

            <div className="relative">
                {leftIcon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#727A89]">
                        {leftIcon}
                    </div>
                )}

                <input
                    id={inputId}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={`
            bg-[#191C27] rounded-md h-[38px] text-[#727A89] text-[14px] font-medium outline-none w-full
            ${leftIcon ? 'pl-[42px] pr-4' : 'px-4'}
            ${readOnly ? 'cursor-default' : ''}
            ${inputClassName}
          `}
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputField;
