import React, { useState } from 'react';
import { Modal, Text, TextInput, View, Pressable } from 'react-native';
import { styles } from './styles';
import type { Task } from '@domain/entities';

type TaskItemProps = {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

export const TaskItem = ({
  onDelete,
  onToggle,
  onEdit,
  task,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description ?? '',
  );

  const handleOpenEdit = () => {
    setEditTitle(task.title);
    setEditDescription(task.description ?? '');
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editTitle.trim()) {
      return;
    }
    onEdit({
      ...task,
      title: editTitle.trim(),
      description: editDescription.trim() || undefined,
      updatedAt: Date.now(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

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

      <View style={styles.actions}>
        <Pressable
          onPress={handleOpenEdit}
          hitSlop={10}
          style={styles.actionBtn}
        >
          <Text style={styles.editIcon}>✏️</Text>
        </Pressable>
        <Pressable
          onPress={() => onDelete(task.id)}
          hitSlop={10}
          style={styles.actionBtn}
        >
          <Text style={styles.delete}>🗑</Text>
        </Pressable>
      </View>

      <Modal
        visible={isEditing}
        transparent
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Editar Task</Text>

            <TextInput
              style={styles.modalInput}
              value={editTitle}
              onChangeText={setEditTitle}
              placeholder="Título"
              autoFocus
            />

            <TextInput
              style={[styles.modalInput, styles.modalInputMultiline]}
              value={editDescription}
              onChangeText={setEditDescription}
              placeholder="Descrição (opcional)"
              multiline
              numberOfLines={3}
            />

            <View style={styles.modalActions}>
              <Pressable
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={handleCancel}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.modalBtn, styles.saveBtn]}
                onPress={handleSave}
              >
                <Text style={styles.saveText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
