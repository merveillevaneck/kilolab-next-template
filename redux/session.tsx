import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface SessionState {
  active: boolean,
  authToken: string | null,
}

export const DefaultSessionState: SessionState = {
  active: false,
  authToken: null,
};


export const sessionSlice = createSlice({
  name: 'session',
  initialState: DefaultSessionState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      return {
        active: true,
        authToken: action.payload,
      };
    },
    logout: () => {
      return {
        active: false,
        authToken: null,
      };
    },
  },
});

export const session = sessionSlice.reducer;

export const { login, logout } = sessionSlice.actions;

export const getSession = (state: any) => state.session;

interface Options {
  onLogin?: () => void;
  onLogout?: () => void;
  selector?: (state: any) => any;
}

export const useSession = (options: Options = {}) => {
  const { onLogin, onLogout, selector } = options;

  const session = useSelector(selector ?? getSession);
  const dispatch = useDispatch();

  const login = useCallback((jwtToken: string) => {
    dispatch(sessionSlice.actions.login(jwtToken));
    if (onLogin) {
      onLogin();
    }
  }, [dispatch, onLogin]);

  const logout = useCallback(() => {
    dispatch(sessionSlice.actions.logout());
    if (onLogout) {
      onLogout();
    }
  }, [dispatch, onLogout]);

  return [
    session,
    {
      login,
      logout,
    },
  ] as const;
};