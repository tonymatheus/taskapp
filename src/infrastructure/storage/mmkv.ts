import { MMKV_CONFIG } from '@config/constants';
import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: MMKV_CONFIG.TASK_STORAGE_ID,
});
