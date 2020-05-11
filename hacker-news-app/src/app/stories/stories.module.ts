import { NgModule } from "@angular/core";
import { StoryListComponent } from './story-list/story-list-component';

import { StoreModule } from '@ngrx/store';
import * as fromStories from './state/story.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffect } from './state/story.effect';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromStories.storyFeatureKey, fromStories.reducer),
        EffectsModule.forFeature([StoryEffect])
    ],
    declarations: [
        StoryListComponent
    ]
})
export class StoriesModule { }