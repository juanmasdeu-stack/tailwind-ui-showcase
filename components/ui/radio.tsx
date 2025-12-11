import { InputHTMLAttributes, forwardRef } from "react";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ className = "", label, disabled, ...props }, ref) => {
        return (
            <label className={`inline-flex items-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                <div className="relative flex items-center">
                    <input
                        type="radio"
                        ref={ref}
                        disabled={disabled}
                        className="peer h-5 w-5 appearance-none rounded-full border border-slate-300 bg-white checked:border-slate-900 checked:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:checked:border-slate-50 dark:checked:bg-slate-50 dark:focus:ring-offset-slate-900 transition-colors"
                        {...props}
                    />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-slate-900 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                </div>
                {label && (
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300 select-none">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Radio.displayName = "Radio";
