import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {DefaultTheme} from 'styled-components';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../redux';
import {Theme} from './themes';

export type ThemeState = DefaultTheme;

export const DefaultThemeState: ThemeState = Theme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState: DefaultThemeState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<Partial<ThemeState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const theme = themeSlice.reducer;

export const ThemeActions = {
    ...themeSlice.actions
};

export const getTheme = (state: RootState) => state[themeSlice.name];

export const useTheme = () => {

  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  const setTheme = useCallback((theme: Partial<DefaultTheme>) => {
    dispatch(ThemeActions.setTheme(theme));
  }, [dispatch]);

  return useMemo(() => ([
    theme,
    setTheme,
  ] as const), [
    theme,
    setTheme
  ]);
};

