import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import * as fromStoryReducer from '../state/story.reducer';
import * as fromStoryActions from '../state/story.actions';
import { Observable } from 'rxjs';
import { Story } from '../story';
import { take } from 'rxjs/operators';

@Component({
    selector: 'story-list',
    templateUrl: 'story-list-component.html',
    styleUrls: ['story-list-component.scss']
})
export class StoryListComponent implements OnInit {

    stories$: Observable<string>;

    constructor(private store: Store<fromStoryReducer.StoryState>) { }

    ngOnInit() {
        this.store.dispatch(fromStoryActions.Load());
        this.stories$ = this.store.pipe(select(fromStoryReducer.getStories));
    }
}