import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { StoriesService } from '../stories.service';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
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
      map(action => action['page']),
      switchMap(page =>
        this.storiesService.loadTopStories(page).pipe(
          map((data) => fromStoryActions.LoadSuccess({ stories: data })),
          catchError((error) => of(fromStoryActions.LoadFail({ error: error })))
        )
      )
    )
  );

  currentStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStoryActions.StoryActionTypes.LoadCurrentStory),
      map(action => action['id']),
      switchMap((id) =>
        this.storiesService.loadDetails(id).pipe(
          map((data) => fromStoryActions.LoadCurrentStorySuccess({ story: data })),
          catchError((error) => of(fromStoryActions.LoadCurrentStoryFail({ error: error })))
        )
      )
    )
  );
}
