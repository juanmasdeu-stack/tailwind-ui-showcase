import { InputHTMLAttributes, forwardRef } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    ({ className = "", label, disabled, ...props }, ref) => {
        return (
            <label className={`inline-flex items-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                <div className="relative">
                    <input
                        type="checkbox"
                        ref={ref}
                        disabled={disabled}
                        className="peer sr-only"
                        {...props}
                    />
                    <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-900 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-500 peer-focus:ring-offset-2 dark:bg-slate-700 dark:peer-checked:bg-slate-50 dark:peer-checked:after:bg-slate-900 dark:peer-focus:ring-offset-slate-900 transition-colors" />
                </div>
                {label && (
                    <span className="ml-3 text-sm text-slate-700 dark:text-slate-300 select-none">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Switch.displayName = "Switch";
