import { InputHTMLAttributes, forwardRef } from "react";
import { WarningCircle } from "@phosphor-icons/react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        disabled={disabled}
                        className={`
              block w-full rounded-md border text-sm
              ${leftIcon ? "pl-10" : "pl-3"}
              ${rightIcon ? "pr-10" : "pr-3"}
              py-2
              bg-white dark:bg-slate-900
              placeholder-slate-400 dark:placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-offset-0
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error
                                ? "border-red-500 text-red-900 dark:text-red-100 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                : "border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-slate-500 focus:ring-slate-500 dark:focus:border-slate-400 dark:focus:ring-slate-400"
                            }
              ${className}
            `}
                        {...props}
                    />
                    {rightIcon && !error && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                            {rightIcon}
                        </div>
                    )}
                    {error && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
                            <WarningCircle size={20} />
                        </div>
                    )}
                </div>
                {error && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
                )}
                {!error && helperText && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
