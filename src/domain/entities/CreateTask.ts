import { CreateTaskInput } from '@domain/useCases/types';
import { Task } from './Task';

import { v4 as uuid } from 'uuid';

export const createTask = ({ title, description }: CreateTaskInput): Task => ({
  id: uuid(),
  description,
  title,
  status: 'pending',
  createdAt: Date.now(),
  updatedAt: Date.now(),
});
