# Tailwind UI Showcase

A shared library of Tailwind CSS styled components built with Next.js 14+.

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   **Node.js**: v18.17.0 or later
*   **Package Manager**: npm, yarn, pnpm, or bun

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/juanmasdeu-stack/tailwind-ui-showcase.git
    cd tailwind-ui-showcase
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Add a New Component

to contribute a new component to the library, follow these steps:

1.  **Create the Component File**:
    *   Navigate to `components/ui/`.
    *   Create a new file, e.g., `my-new-component.tsx`.
    *   Define your component using Tailwind CSS classes.

    ```tsx
    // components/ui/my-new-component.tsx
    export function MyNewComponent({ children }: { children: React.ReactNode }) {
      return (
        <div className="p-4 bg-white rounded-lg shadow dark:bg-slate-800">
          {children}
        </div>
      );
    }
    ```

2.  **Export the Component (Optional)**:
    *   If you have an `index.ts` in `components/ui`, export it there.

3.  **Showcase the Component**:
    *   Create or update a page in `app/` to demonstrate the component.
    *   For example, to add to the "Buttons" page, edit `app/buttons/page.tsx`.
    *   Import and use your new component to show how it looks.

## Project Structure

*   `app/`: App Router pages (Showcase pages).
*   `components/`: Reusable React components.
    *   `components/ui/`: Atomic UI components (Buttons, Inputs, etc.).
*   `public/`: Static assets.
