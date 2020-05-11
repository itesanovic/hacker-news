import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { StoriesService } from '../stories.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromStoryActions from './story.actions';

@Injectable()
export class StoryEffect {
  constructor(
    private actions$: Actions,
    private storiesService: StoriesService
  ) {}

  stories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStoryActions.StoryActionTypes.Load),
      mergeMap((payload) =>
        this.storiesService.loadTopStories(0).pipe(
          map((data) => fromStoryActions.LoadSuccess({ stories: data })),
          catchError((error) => of(fromStoryActions.LoadFail({ error: error })))
        )
      )
    )
  );
}
