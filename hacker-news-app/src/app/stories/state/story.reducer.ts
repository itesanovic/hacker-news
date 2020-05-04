import { createReducer, on, createSelector, Action, createFeatureSelector } from '@ngrx/store';
import * as storyActions from './story.actions';
import { Story } from '../story';

export const storyFeatureKey = 'stories';

export interface StoryState {
    stories: string;
    currentStory: Story;
    error: string;
}

const getFeatureStateSelector = createFeatureSelector<StoryState>(storyFeatureKey);

export const getStories = createSelector(
    getFeatureStateSelector,
    state => state.stories
)

const initialState = {
    stories: '',
    currentStory: null,
    error: ''
};

const storyReducer = createReducer(
    initialState,
    on(storyActions.LoadSuccess, (state, props) => ({ ...state, stories: props.stories, error: '' })),
    on(storyActions.LoadFail, (state, props) => ({ ...state, stories: '', error: props.error }))
);

export function reducer(state: StoryState, action: Action) {
    return storyReducer(state, action);
}