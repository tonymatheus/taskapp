import { useCallback, useState } from 'react';

import { taskUseCases } from '@app/container';
import { Task } from '@domain/entities';
import { CreateTaskInput } from '@domain/useCases/types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(async () => {
    const data = await taskUseCases.getTasks();
    setTasks(data);
  }, []);

  const createTask = useCallback(
    async (input: CreateTaskInput) => {
      await taskUseCases.createTask(input);
      await loadTasks();
    },
    [loadTasks],
  );

  const updateTask = useCallback(
    async (task: Task) => {
      await taskUseCases.updateTask(task);
      await loadTasks();
    },
    [loadTasks],
  );

  const deleteTask = useCallback(
    async (id: string) => {
      await taskUseCases.deleteTask(id);
      await loadTasks();
    },
    [loadTasks],
  );

  return {
    tasks,
    createTask,
    updateTask,
    loadTasks,
    deleteTask,
    reload: loadTasks,
  };
};
