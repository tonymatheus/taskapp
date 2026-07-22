import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import type { Task } from '@domain/entities';

type TaskItemProps = {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
};

export const TaskItem = ({ onDelete, onToggle, task }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.content} onPress={() => onToggle(task)}>
        <Text
          style={[
            styles.title,
            task.status === 'completed' && styles.completed,
          ]}
        >
          {task.title}
        </Text>

        {!!task.description && (
          <Text style={styles.description}>{task.description}</Text>
        )}
      </Pressable>

      <Pressable onPress={() => onDelete(task.id)} hitSlop={10}>
        <Text style={styles.delete}>🗑</Text>
      </Pressable>
    </View>
  );
};
