import { createAction, props } from '@ngrx/store';

export enum StoryActionTypes {
  Load = '[Stories] Load',
  LoadSuccess = '[Stories] Load Success',
  LoadFail = '[Stories] Load Fail',
  LoadCurrentStory = '[CurrentStory] Load Current Story',
  LoadCurrentStorySuccess = '[CurrentStory] Load Current Story Success',
  LoadCurrentStoryFail = '[CurrentStory] Load Current Story Fail',
}

export const Load = createAction(
  StoryActionTypes.Load,
  props<{ page: number }>()
);

export const LoadSuccess = createAction(
  StoryActionTypes.LoadSuccess,
  props<{ stories: any[] }>()
);

export const LoadFail = createAction(
  StoryActionTypes.LoadFail,
  props<{ error: string }>()
);

export const LoadCurrentStory = createAction(
  StoryActionTypes.LoadCurrentStory,
  props<{ id: string }>()
);

export const LoadCurrentStorySuccess = createAction(
  StoryActionTypes.LoadCurrentStorySuccess,
  props<{ story: any }>()
);

export const LoadCurrentStoryFail = createAction(
  StoryActionTypes.LoadCurrentStoryFail,
  props<{ error: string }>()
);
