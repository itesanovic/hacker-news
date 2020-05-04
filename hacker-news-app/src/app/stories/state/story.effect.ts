import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { StoriesService } from '../stories.service';
import * as fromStoryActions from './story.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class StoryEffect {
    constructor(private actions$: Actions,
        private storiesService: StoriesService) { }

    stories$ = createEffect(() => this.actions$.pipe(
        ofType(fromStoryActions.StoryActionTypes.Load),
        mergeMap(() => this.storiesService.loadStories().pipe(
            map(data => fromStoryActions.LoadSuccess({ stories: data })),
            catchError(error => of(fromStoryActions.LoadFail({ error: error })))
        ))));
}