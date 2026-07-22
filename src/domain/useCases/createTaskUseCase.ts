import type { TaskRepository } from '@domain/domainRepositories';
import 'react-native-get-random-values';
import { createTask } from '@domain/entities';
import type { CreateTaskInput } from './types';

export const createTaskUseCase =
  (repository: TaskRepository) => async (input: CreateTaskInput) => {
    const task = createTask(input);

    await repository.createTask(task);
  };
