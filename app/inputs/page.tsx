"use client";

import { Input } from "@/components/ui/input";
import { Envelope, LockKey, MagnifyingGlass } from "@phosphor-icons/react";

export default function InputsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Inputs</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Form input fields with validation states, helper text, and icons.
                </p>
            </div>

            <div className="max-w-2xl space-y-12">
                {/* Basic Types */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Basic Types</h2>
                    <div className="space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Input label="Text Input" placeholder="Type something..." />
                        <Input type="email" label="Email Input" placeholder="john@example.com" />
                        <Input type="password" label="Password Input" placeholder="••••••••" />
                    </div>
                </section>

                {/* States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">States</h2>
                    <div className="space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Input label="With Helper Text" placeholder="Focus me" helperText="This is a helpful hint." />
                        <Input label="With Error" placeholder="Invalid input" error="This field is required." defaultValue="Wrong Value" />
                        <Input label="Disabled" placeholder="Cannot type here" disabled />
                    </div>
                </section>

                {/* With Icons */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">With Icons</h2>
                    <div className="space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Input
                            label="Search"
                            placeholder="Search..."
                            leftIcon={<MagnifyingGlass size={20} />}
                        />
                        <Input
                            label="Email"
                            placeholder="user@gmail.com"
                            leftIcon={<Envelope size={20} />}
                        />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="••••••••"
                            leftIcon={<LockKey size={20} />}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
