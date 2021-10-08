import React from 'react'

export default function Input({
    value,
    type,
    name,
    onChange,
    placeholder,
    labelName,
    error,
    onBlur,
    onFocus,
    className,
    maxLength,
    disabled
}) {
    return (
            <div className="flex flex-col mb-4">
                {labelName && (
                    <label htmlFor={name} className="text-lg mb-2 text-purple-600">
                        {labelName}
                    </label>
                )}
                <input
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                maxLength={maxLength}
                disabled={disabled}
                className={["input bg-gray-800 placeholder-gray-700 w-full px-6 py-3", 
                        error ?
                        "border-red-500 text-red-500" : 
                        "focus:border-teal-500 border-gray-800 text-gray-500", className
                    ].join(" ")}
                value={value}
                placeholder={placeholder}
                />
                <span className="text-red-500 text-sm pt-3">{error}</span>
            </div>
    )
}
