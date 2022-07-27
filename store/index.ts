import { combineReducers, Store, CombinedState, AnyAction } from 'redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({});
      return combinedReducer(state, action);
    }
  }
};

export const store = configureStore({
  reducer: rootReducer, // 위에서 만든 persistReducer를 대입
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore: MakeStore<EnhancedStore> = () => store;
export const wrapper = createWrapper<Store>(makeStore, { debug: process.env.NODE_ENV !== 'production' });
export type RootState = ReturnType<typeof rootReducer>;
