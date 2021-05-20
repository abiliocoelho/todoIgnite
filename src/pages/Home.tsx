import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== "") {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: true,
      };

      setTasks((oldTask) => [...oldTask, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.find((task) => task.id === id);
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    console.log(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
