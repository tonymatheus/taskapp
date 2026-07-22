import { useCallback, useState } from 'react';

import { taskUseCases } from '@app/container';
import type { Task } from '@domain/entities';
import type { CreateTaskInput } from '@domain/useCases/types';

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

  const toggleTask = useCallback(
    async (task: Task) => {
      await updateTask({
        ...task,
        status: task.status === 'pending' ? 'completed' : 'pending',
        updatedAt: Date.now(),
      });
    },
    [updateTask],
  );

  return {
    tasks,
    createTask,
    updateTask,
    loadTasks,
    deleteTask,
    toggleTask,
    reload: loadTasks,
  };
};
