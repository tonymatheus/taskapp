import { createMMKVTaskRepository } from '@infraRepositories/MMKVTaskRepository';

import {
  createDeleteTaskUseCase,
  createGetTaskUseCase,
  createTaskUseCase,
  createUpdateTaskUseCase,
} from '@domain/useCases';

const repository = createMMKVTaskRepository();

export const taskUseCases = {
  createTask: createTaskUseCase(repository),
  getTasks: createGetTaskUseCase(repository),
  updateTask: createUpdateTaskUseCase(repository),
  deleteTask: createDeleteTaskUseCase(repository),
};
