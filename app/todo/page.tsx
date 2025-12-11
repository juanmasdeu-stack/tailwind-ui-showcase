import { TodoList } from "@/components/ui/todo-list";

export default function TodoPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Todo List Example</h1>
            <p className="text-slate-600 dark:text-slate-400">
                This is an interactive example of a Todo List component demonstrating state management, input handling, and dynamic list rendering.
            </p>

            <div className="flex justify-center py-10">
                <TodoList />
            </div>
        </div>
    );
}
