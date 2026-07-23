import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../components/TaskItem';
import { styles } from './styles';

export const TaskListScreen = () => {
  const { tasks, createTask, toggleTask, deleteTask, updateTask, loadTasks } =
    useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

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
      <View style={styles.ViewTitleContainer}>
        <Text style={styles.title}>My Tasks</Text>
      </View>

      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição (opcional)"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button title="Adicionar Task" onPress={handleCreateTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={updateTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma task ainda</Text>
        }
      />
    </SafeAreaView>
  );
};
