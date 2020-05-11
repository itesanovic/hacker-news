import { createReducer, on, createSelector, Action, createFeatureSelector } from '@ngrx/store';
import * as storyActions from './story.actions';

export const storyFeatureKey = 'stories';

export interface StoryState {
  stories: any[];
  currentStoryId: string;
  error: string;
}

const initialState = {
  stories: [],
  currentStoryId: null,
  error: '',
};

const getFeatureStateSelector = createFeatureSelector<StoryState>(
  storyFeatureKey
);

export const getTopStories = createSelector(
  getFeatureStateSelector,
  (state, props) => state.stories
);

const storyReducer = createReducer(
  initialState,
  on(storyActions.LoadSuccess, (state, props) => ({
    ...state,
    stories: props.stories,
    error: '',
  })),
  on(storyActions.LoadFail, (state, props) => ({
    ...state,
    stories: [],
    error: props.error,
  }))
);

export function reducer(state: StoryState, action: Action) {
  return storyReducer(state, action);
}
