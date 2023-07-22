import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//reducers
import userReducer from './reducers/userReducer';
import formReducer from './reducers/formReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  form: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
