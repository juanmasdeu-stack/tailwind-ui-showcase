"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Switch } from "@/components/ui/switch";

export default function FormElementsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Form Elements</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Selection controls using native Tailwind styling.
                </p>
            </div>

            <div className="max-w-2xl space-y-12">
                {/* Checkboxes */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Checkboxes</h2>
                    <div className="flex flex-col gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Checkbox label="Remember me" />
                        <Checkbox label="Subscribe to newsletter" defaultChecked />
                        <Checkbox label="Disabled option" disabled />
                        <Checkbox label="Disabled checked" disabled defaultChecked />
                    </div>
                </section>

                {/* Radio Buttons */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Radio Buttons</h2>
                    <div className="flex flex-col gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Radio name="plan" label="Free Plan" defaultChecked />
                        <Radio name="plan" label="Pro Plan" />
                        <Radio name="plan" label="Enterprise Plan" />
                        <Radio name="network" label="Disabled Radio" disabled />
                    </div>
                </section>

                {/* Switches */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Switches / Toggles</h2>
                    <div className="flex flex-col gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Switch label="Airplane Mode" />
                        <Switch label="Wi-Fi" defaultChecked />
                        <Switch label="Read-only setting" disabled />
                        <Switch label="Locked active setting" disabled defaultChecked />
                    </div>
                </section>
            </div>
        </div>
    );
}
