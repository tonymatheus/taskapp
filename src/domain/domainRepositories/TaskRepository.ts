import type { Task } from '@domain/entities';

export interface TaskRepository {
  getTasks(): Promise<Task[]>;

  createTask(task: Task): Promise<void>;

  updateTask(task: Task): Promise<void>;

  deleteTask(id: string): Promise<void>;
}
