import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStoryReducer from '../state/story.reducer';
import * as fromStoryActions from '../state/story.actions';
import { Observable } from 'rxjs';
import { storiesPerPage } from 'src/app/constants';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'story-list',
  templateUrl: 'story-list-component.html',
  styleUrls: ['story-list-component.scss'],
})
export class StoryListComponent implements OnInit {
  readonly storiesPerPage = storiesPerPage;
  currentPage = 0; //TODO: get page from url params

  stories$: Observable<any[]>;

  constructor(
    private store: Store<fromStoryReducer.StoryState>,
    private service: StoriesService
  ) {}

  ngOnInit() {
    this.service.loadTopStories(0);
    
    this.store.dispatch(
      fromStoryActions.Load({ pageNumber: this.currentPage })
    );
    
    this.loadStories(this.currentPage);
  }

  loadStories(number) {
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
