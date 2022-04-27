import { combineReducers, AnyAction } from 'redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
import { Reducers } from './reducers';

import { ThemeState } from '../theme';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

export * from './submissions';

export type RootState = {
  submissions: number;
  theme: ThemeState;
};

export const makeStore = (Reducers: any) => {
  // const rootReducer = persistReducer<RootState, AnyAction>(
  //   persistConfig,
  //   combineReducers<RootState>({ ...Reducers }),
  // );
  const rootReducer = combineReducers<RootState>({ ...Reducers });
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
  });

  //    const store  = createStore(rootReducer, { session: false })
  // const persistor = persistStore(store);

  return {
    store,
  };
};

const { store } = makeStore(Reducers);

export { store };

export const state = () => store?.getState();
