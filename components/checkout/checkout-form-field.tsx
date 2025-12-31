import React from "react";

type CheckoutFormFieldProps = {
    htmlFor: string;
    label: string;
    type: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function CheckoutFormField({ htmlFor, label, type, ...inputProps }: CheckoutFormFieldProps) {
    return (
        <>
            <label htmlFor={htmlFor} className="relative">
                <span className="text-sm text-checkoutGray">{label}</span>
                <span className="absolute text-red-500 text-sm top-0 right-0">*</span>
            </label>
            <input
                type={type}
                className="border px-4 py-2.5 rounded-sm text-sm text-checkoutGray"
                placeholder={label}
                autoComplete="true"
                required
                {...inputProps}
            />
        </>
    );
}

export { CheckoutFormField };
