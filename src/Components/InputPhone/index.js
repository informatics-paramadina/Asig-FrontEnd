import React from 'react'
import Input from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


export default function InputPhone({
    name,
    labelName,
    onChange,
    value,
    error
}) {
    return (
            <div className="flex flex-col mb-4">
                {labelName && (
                    <label htmlFor={name} className="text-lg mb-2">
                    {labelName}
                    </label>
                )}
                <Input
                international
                defaultCountry="ID"
                name={name}
                className={["input bg-white", 
                        error ?
                        "border-red-500 text-red-500" : 
                        "focus:border-teal-500 border-gray-600 text-gray-600"
                    ].join(" ")}
                onChange={onChange}
                value={value}
                />
                <span className="text-red-500 text-sm pt-3">{error}</span>
            </div>
    )
}
