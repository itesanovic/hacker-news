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
  currentPage = 0; //TODO: get page from url params

  stories$: Observable<any[]>;

  constructor(private store: Store<fromStoryReducer.StoryState>) {}

  ngOnInit() {
    this.store.dispatch(fromStoryActions.Load());
    this.stories$ = this.store.pipe(select(fromStoryReducer.getTopStories));
  }

  prepareUrl(url: string) {
    return url
      ?.replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split(/[/?#]/)[0];
  }

  prepareTime(date: number) {
    if (date) return new Date(date * 1000).getHours();
  }
}
