"use client";

import { Button } from "@/components/ui/button";
import { Coffee, PaperPlaneRight, Trash } from "@phosphor-icons/react";

export default function ButtonsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Buttons</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Reusable button component with multiple variants, sizes, and states.
                </p>
            </div>

            <div className="space-y-12">
                {/* Variants */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Variants</h2>
                    <div className="flex flex-wrap gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </section>

                {/* Sizes */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Sizes</h2>
                    <div className="flex flex-wrap items-center gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </section>

                {/* States */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">States</h2>
                    <div className="flex flex-wrap items-center gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Button disabled>Disabled</Button>
                        <Button isLoading>Loading</Button>
                        <Button variant="outline" disabled>Disabled Outline</Button>
                    </div>
                </section>

                {/* With Icons */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">With Icons</h2>
                    <div className="flex flex-wrap items-center gap-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <Button leftIcon={<Coffee size={18} />}>Left Icon</Button>
                        <Button rightIcon={<PaperPlaneRight size={18} weight="fill" />}>Right Icon</Button>
                        <Button variant="secondary" leftIcon={<Trash size={18} />}>Delete</Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
