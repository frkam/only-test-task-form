import { ReactNode, useReducer } from 'react';
import { AuthDispatchContext, initialState, AuthStateContext, reducer } from '@/entities/user';

export const withAuth = (component: () => ReactNode) => () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{component()}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
