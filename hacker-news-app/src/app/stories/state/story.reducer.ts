import { createReducer, on, createSelector, Action, createFeatureSelector } from '@ngrx/store';
import * as storyActions from './story.actions';

export const storyFeatureKey = 'stories';

export interface StoryState {
  stories: any[];
  currentStory: any;
  error: string;
}

const initialState = {
  stories: [],
  currentStory: null,
  error: '',
};

const getFeatureStateSelector = createFeatureSelector<StoryState>(
  storyFeatureKey
);

export const getTopStories = createSelector(
  getFeatureStateSelector,
  state => state.stories
);

export const getCurrentStory = createSelector(
  getFeatureStateSelector,
  state => state.currentStory
)

export const getError = createSelector(
  getFeatureStateSelector,
  state => state.error
)

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
  })),
  on(storyActions.LoadCurrentStorySuccess, (state, props) => ({
    ...state,
    currentStory: props.story
  }))
);

export function reducer(state: StoryState, action: Action) {
  return storyReducer(state, action);
}
