"use client";

import { useState } from "react";
import { Plus, Trash } from "@phosphor-icons/react";

export function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue.trim()]);
        setInputValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    const handleRemoveTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                My Tasks
            </h2>

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder:text-slate-400"
                />
                <button
                    onClick={handleAddTodo}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    aria-label="Add task"
                >
                    <Plus size={24} weight="bold" />
                </button>
            </div>

            <ul className="space-y-2">
                {todos.length === 0 ? (
                    <li className="text-center text-slate-500 dark:text-slate-400 py-4 italic">
                        No tasks yet. Add one above!
                    </li>
                ) : (
                    todos.map((todo, index) => (
                        <li
                            key={index}
                            className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            <span className="text-slate-700 dark:text-slate-200">
                                {todo}
                            </span>
                            <button
                                onClick={() => handleRemoveTodo(index)}
                                className="text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                                aria-label="Remove task"
                            >
                                <Trash size={20} />
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
