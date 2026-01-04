import React from "react";

type CheckoutFormFieldProps = {
    htmlFor: string,
    label: string,
    type: string,
    placeholder?: string | number,
} & React.InputHTMLAttributes<HTMLInputElement>;

function CheckoutFormField({ htmlFor, label, type, placeholder, ...inputProps }: CheckoutFormFieldProps) {
    return (
        <>
            <label htmlFor={htmlFor} className="space-x-0.5">
                <span className="text-sm text-checkoutGray">{label}</span>
                <span className="text-red-500 text-sm">*</span>
            </label>
            <input
                type={type}
                className="border px-4 py-2.5 rounded-sm text-sm text-checkoutGray"
                placeholder={placeholder ? placeholder : label}
                autoComplete="true"
                required
                {...inputProps}
            />
        </>
    );
}

export { CheckoutFormField };
