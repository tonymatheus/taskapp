import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../components/TaskItem';
import { styles } from './styles';

export const TaskListScreen = () => {
  const { tasks, createTask, toggleTask, deleteTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = async () => {
    if (!title.trim()) {
      return;
    }

    await createTask({
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tasks</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button title="Add Task" onPress={handleCreateTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} onToggle={toggleTask} />
        )}
        ListEmptyComponent={<Text>No Content yet</Text>}
      />
    </SafeAreaView>
  );
};
