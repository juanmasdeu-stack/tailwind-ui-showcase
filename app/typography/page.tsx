export default function TypographyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Typography</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Examples of default Tailwind heading styles, font weights, and body text.
                </p>
            </div>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Headings</h2>
                <div className="space-y-6 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Heading 1</h1>
                        <span className="text-xs text-slate-500 font-mono">text-4xl font-extrabold</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Heading 2</h2>
                        <span className="text-xs text-slate-500 font-mono">text-3xl font-bold</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Heading 3</h3>
                        <span className="text-xs text-slate-500 font-mono">text-2xl font-bold</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Heading 4</h4>
                        <span className="text-xs text-slate-500 font-mono">text-xl font-bold</span>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white">Heading 5</h5>
                        <span className="text-xs text-slate-500 font-mono">text-lg font-bold</span>
                    </div>
                    <div>
                        <h6 className="text-base font-bold text-slate-900 dark:text-white">Heading 6</h6>
                        <span className="text-xs text-slate-500 font-mono">text-base font-bold</span>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Body Text</h2>
                <div className="space-y-4 p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p className="text-base text-slate-600 dark:text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Domus, ut aiunt, est ubi cor tuum est.
                        Sed tamen intellego quid velit. Non igitur bene.
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Small text (text-sm): Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                        Extra small text (text-xs): Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Blockquote</h2>
                <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <blockquote className="border-l-4 border-slate-300 dark:border-slate-700 pl-4 italic text-slate-700 dark:text-slate-300">
                        &quot;Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.&quot;
                    </blockquote>
                </div>
            </section>
        </div>
    );
}
