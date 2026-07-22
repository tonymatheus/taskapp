import type { TaskRepository } from '@domain/domainRepositories';

export const createGetTaskUseCase = (repository: TaskRepository) => {
  return () => repository.getTasks();
};
