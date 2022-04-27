import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type SubmissionState = number;

export const DefaultSubmissionsState: SubmissionState = 0;

export const submissionsSlice = createSlice({
  name: 'session',
  initialState: DefaultSubmissionsState,
  reducers: {
    increment: (state: SubmissionState) => {
      return state += 1;
    },
    decrement: (state: SubmissionState) => {
      return state -+ 1;
    },
  },
});

export const submissions = submissionsSlice.reducer;

export const { increment, decrement } = submissionsSlice.actions;

export const getSubmissions = (state: any) => state.submissions;

export const useSubmissions = () => {

  const submissions = useSelector(getSubmissions);
  const dispatch = useDispatch();

  const decrement = useCallback(() => {
    dispatch(submissionsSlice.actions.decrement());
  }, [dispatch]);

  const increment = useCallback(() => {
    dispatch(submissionsSlice.actions.increment());
    
  }, [dispatch]);

  return useMemo(() => ([
    submissions,
    {
      increment,
      decrement,
    }
  ] as const), [
    submissions,
    increment,
    decrement,
  ]);
};
