import { TaskRepository } from '@domain/domainRepositories';

export const createDeleteTaskUseCase = (repository: TaskRepository) => {
  return async (id: string): Promise<void> => {
    await repository.deleteTask(id);
  };
};
