"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    House,
    TextT,
    Palette,
    ToggleLeft,
    Textbox,
    CheckSquare
} from "@phosphor-icons/react";

const navItems = [
    { name: "Home", href: "/", icon: House },
    { name: "Typography", href: "/typography", icon: TextT },
    { name: "Colors", href: "/colors", icon: Palette },
    { name: "Buttons", href: "/buttons", icon: ToggleLeft },
    { name: "Inputs", href: "/inputs", icon: Textbox },
    { name: "Form Elements", href: "/form-elements", icon: CheckSquare },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col h-full">
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                    Tailwind Showcase
                </h1>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                                        }`}
                                >
                                    <item.icon size={20} weight={isActive ? "fill" : "regular"} />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                    © 2024 Showcase App
                </p>
            </div>
        </aside>
    );
}
