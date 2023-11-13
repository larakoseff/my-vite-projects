import { useEffect, useState } from "react";
import { v4 as createId } from "uuid";

const createLocal = (id) => {
    const get = () => {
        const response = window.localStorage.getItem(id)
        if (!response) return []
        return JSON.parse(response)
    }

    const set = (value) => {
        const string = JSON.stringify(value)
        window.localStorage.setItem(id, string)

    }
    return {
        get,
        set,
    }
}

const saved = createLocal("245e5865-3f0d-4e65-8b8b-44a50af76c5d")

export const useTasks = () => {
    const [tasks, setTasks] = useState(saved.get());
    const [message, setMessage] = useState(null)

    useEffect(() => {
        saved.set(tasks)
    }, [tasks])

    const add = (title) => {
        if (!title || title.trim() === "") {
            setMessage("Title is required")
            return
        }

        setMessage(null)

        const newTasks = [
            {
                id: createId(),
                title,
            },
            ...tasks,
        ];

        setTasks(newTasks);
    };

    const remove = (id) => {
        const newTasks = tasks.filter((item) => {
            return item.id !== id;
        });

        setTasks(newTasks);
    };


    return {
        tasks,
        add,
        remove,
        message,
    }
};