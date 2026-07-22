import type { Task } from '@domain/entities';
import type { TaskRepository } from '@domain/domainRepositories';

import { storage } from '@infrastructure/storage/mmkv';
import { STORAGE_KEYS } from '@config/constants';

export const createMMKVTaskRepository = (): TaskRepository => {
  const getTasks = async (): Promise<Task[]> => {
    const tasks = storage.getString(STORAGE_KEYS.TASKS);

    if (!tasks) {
      return [];
    }

    return JSON.parse(tasks) as Task[];
  };

  const createTask = async (task: Task): Promise<void> => {
    const tasks = await getTasks();

    storage.set(STORAGE_KEYS.TASKS, JSON.stringify([...tasks, task]));
  };

  const updateTask = async (task: Task): Promise<void> => {
    const tasks = await getTasks();

    const updatedTasks = tasks.map(item => (item.id === task.id ? task : item));

    storage.set(STORAGE_KEYS.TASKS, JSON.stringify(updatedTasks));
  };

  const deleteTask = async (id: string): Promise<void> => {
    const tasks = await getTasks();

    const filteredUpdatedTasks = tasks.filter(item => item.id !== id);

    storage.set(STORAGE_KEYS.TASKS, JSON.stringify(filteredUpdatedTasks));
  };

  return {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};
