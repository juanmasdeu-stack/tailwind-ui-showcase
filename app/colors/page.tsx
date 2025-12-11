
const colors = [
    "slate", "gray", "zinc", "neutral", "stone",
    "red", "orange", "amber", "yellow", "lime",
    "green", "emerald", "teal", "cyan", "sky",
    "blue", "indigo", "violet", "purple", "fuchsia",
    "pink", "rose"
];

const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default function ColorsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Colors</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Default Tailwind CSS color palette.
                </p>
            </div>

            <div className="space-y-12">
                {colors.map((color) => (
                    <div key={color} className="space-y-4">
                        <h2 className="text-xl font-semibold capitalize text-slate-900 dark:text-white">
                            {color}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
                            {weights.map((weight) => (
                                <ColorBox key={`${color}-${weight}`} color={color} weight={weight} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ColorBox({ color, weight }: { color: string; weight: number }) {
    // We need to force tailwind to include these classes. 
    // In a real app we might safelist them, but for this showcase we'll use style for the background
    // to ensure it shows up even if class scanning misses dynamic strings.
    // Although, let's try to use classes first, but provide a fallback or just use standard classes
    // if we can.
    // Since we can't guarantee class scanning for dynamic strings, we'll use inline styles for the background color
    // BUT we will also add the class name text so the user knows what it is.
    // Actually, wait, "Use standard config".
    // Let's use `style` to be safe for the visual, but display component shows the class name.

    // Actually, let's try to list them explicitly? No too many.
    // Better approach: Tailwind v3+ (and v4) supports arbitrary values but also we want to show the defaults.
    // Let's use `bg-${color}-${weight}` and pray or just helper function that maps to hex?
    // No, that defeats the purpose.
    // I will use `style` to set the background color using CSS variables if available or just let's see.
    // Actually, V4 uses CSS variables for colors e.g. --color-slate-500.
    // So `style={{ backgroundColor: `var(--color-${color}-${weight})` }}` might work!

    return (
        <div className="flex flex-col space-y-2">
            <div
                className="h-16 w-full rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                style={{ backgroundColor: `var(--color-${color}-${weight})` }}
            />
            <div className="text-center">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {weight}
                </p>
                <p className="text-[10px] text-slate-500 font-mono">
                    {color}-{weight}
                </p>
            </div>
        </div>
    );
}
