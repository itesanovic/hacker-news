import { createAction, props } from '@ngrx/store';

export enum StoryActionTypes {
  Load = '[Stories] Load',
  LoadSuccess = '[Stories] Load Success',
  LoadFail = '[Stories] Load Fail',
}

export const Load = createAction(StoryActionTypes.Load);

export const LoadSuccess = createAction(
  StoryActionTypes.LoadSuccess,
  props<{ stories: any[] }>()
);

export const LoadFail = createAction(
  StoryActionTypes.LoadFail,
  props<{ error: string }>()
);
