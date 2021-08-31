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
    onFocus
}) {
    return (
            <div className="flex flex-col mb-4">
                {labelName && (
                    <label htmlFor={name} className="text-lg mb-2">
                        {labelName}
                    </label>
                )}
                <input
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className={["input bg-white", 
                        error ?
                        "border-red-500 text-red-500" : 
                        "focus:border-teal-500 border-gray-600 text-gray-600"
                    ].join(" ")}
                value={value}
                placeholder={placeholder}
                />
                <span className="text-red-500 text-sm pt-3">{error}</span>
            </div>
    )
}
