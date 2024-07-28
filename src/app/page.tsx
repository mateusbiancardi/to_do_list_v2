'use client';

import { useEffect, useState } from "react";
import { Tasks } from "./components/Table";
import styles from "./page.module.css";
import { Button } from "./components/Button";

interface Task {
  task: string;
  active: boolean;
}

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<number>(0);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  const handleCreateTask = () => {
    if (!input) return;

    setInput('');
    const newTask = {
      task: input,
      active: true
    }
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (index: number) => { 
    const newTasks = tasks.filter((task, indexTask) => indexTask !== index);
    setTasks(newTasks);
  }

  const handleActiveTask = (index: number) => {
    const newTasks = tasks.map((task, indexTask) => {
      if (indexTask === index) {
        task.active = !task.active;
      }
      return task;
    })
    setTasks(newTasks);
  }

  const handleEnterKey = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleCreateTask();
    }
  }

  useEffect(() => {
    if (filter === 0) setFilteredTasks(tasks)
    else if (filter === 1) {
      const newTasks = tasks.filter((task) => task.active)
      setFilteredTasks(newTasks)
    }
    else if (filter === 2) {
      const newTasks = tasks.filter((task) => !task.active)
      setFilteredTasks(newTasks)
    }
  }, [tasks, filter])

  return (
    <main className={styles.main} >
      <div className={styles.container} >
        <h2 className={styles.title} >To Do List</h2>

        <div className={styles.inputWrapper}>
          <input 
            className={styles.input} 
            type='text' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => handleEnterKey(e)}
            placeholder="Insira a nova tarefa" 
          />
          <Button label="Adicionar" onClick={handleCreateTask} />
        </div>

        <div className={styles.buttonwrapper}>
          <Button label="Todas" variant onClick={() => setFilter(0)} />
          <Button label="Em andamento" variant onClick={() => setFilter(1)}/>
          <Button label="Concluídas" variant onClick={() => setFilter(2)}/>
        </div>

        <div className={styles.tasksTable}>
          {filteredTasks.map((task, index) => (
            <Tasks 
              key={index} 
              index={index} 
              task={task.task}
              active={task.active}
              handleActiveTask={handleActiveTask}
              handleDeleteTask={handleDeleteTask} />
          ))}
        </div>
      </div>
    </main>
  );
}
