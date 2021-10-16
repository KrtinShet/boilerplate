import AsyncStorage from '@react-native-async-storage/async-storage';
import devToolsEnhancer from 'remote-redux-devtools';

import {combineReducers} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducer';
import authReducer from './reducers/authRecuder';

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }
    middlewares.push(thunk);
    return middlewares;
  },
  enhancers: [devToolsEnhancer({realtime: true, port: 8000})],
});

const persistor = persistStore(store);

export {store, persistor};
