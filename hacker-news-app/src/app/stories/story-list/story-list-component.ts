import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStoryReducer from '../state/story.reducer';
import * as fromStoryActions from '../state/story.actions';
import { Observable } from 'rxjs';
import { storiesPerPage } from 'src/app/constants';

@Component({
  selector: 'story-list',
  templateUrl: 'story-list-component.html',
  styleUrls: ['story-list-component.scss'],
})
export class StoryListComponent implements OnInit {
  readonly storiesPerPage = storiesPerPage;
  currentPage = 0;

  stories$: Observable<any[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromStoryReducer.StoryState>) {}

  ngOnInit() {
    this.loadStories();
    this.stories$ = this.store.pipe(select(fromStoryReducer.getTopStories));
    this.errorMessage$ = this.store.pipe(select(fromStoryReducer.getError));
  }

  loadStories() {
    this.store.dispatch(fromStoryActions.Load({ page: this.currentPage }));
  }

  loadMore() {
    this.currentPage++;
    this.loadStories();
  }
}
