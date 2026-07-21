import { TaskRepository } from '@domain/domainRepositories';
import { Task } from '@domain/entities';

export const createUpdateTaskUseCase = (repository: TaskRepository) => {
  return (task: Task) => repository.updateTask(task);
};
