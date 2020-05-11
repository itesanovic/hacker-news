import { Component, OnInit } from '@angular/core';
import * as fromStoryReducer from '../state/story.reducer';
import * as fromStoryActions from '../state/story.actions';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'story-details',
  templateUrl: 'story-details-component.html',
  styleUrls: ['story-details-component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  story$;

  constructor(
    private store: Store<fromStoryReducer.StoryState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) =>
      this.store.dispatch(fromStoryActions.LoadCurrentStory({ id: params.id }))
    );

    this.story$ = this.store.pipe(select(fromStoryReducer.getCurrentStory));
  }
}
