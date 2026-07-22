import type { TaskRepository } from '@domain/domainRepositories';
import type { Task } from '@domain/entities';

export const createUpdateTaskUseCase = (repository: TaskRepository) => {
  return (task: Task) => repository.updateTask(task);
};
