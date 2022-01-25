import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../features/user/userSlice'
import userReducer from '../features/user/userSlice'
import taskReducer from '../features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
