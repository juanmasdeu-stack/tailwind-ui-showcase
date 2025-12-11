export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900 dark:text-white">
          Tailwind css defaults showcase
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          A comprehensive reference for default Tailwind CSS v4 styles and custom UI components built with them.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Typography"
          description="Headings, paragraphs, and list styles."
          href="/typography"
        />
        <Card
          title="Colors"
          description="Complete default color palette reference."
          href="/colors"
        />
        <Card
          title="Buttons"
          description="Button variants, sizes, and states."
          href="/buttons"
        />
        <Card
          title="Inputs"
          description="Form inputs, text areas, and error states."
          href="/inputs"
        />
        <Card
          title="Form Elements"
          description="Checkboxes, radios, and toggle switches."
          href="/form-elements"
        />
      </div>
    </div>
  );
}

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      className="block p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all bg-white dark:bg-slate-900"
    >
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </a>
  );
}
