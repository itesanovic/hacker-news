import { NgModule } from '@angular/core';
import { StoryListComponent } from './story-list/story-list-component';

import { StoreModule } from '@ngrx/store';
import * as fromStories from './state/story.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffect } from './state/story.effect';
import { CommonModule } from '@angular/common';
import { StoryDetailsComponent } from './story-details/story-details-component';
import { AppRoutingModule } from '../app-routing.module';
import { StoryTitleComponent } from './story-title/story-title-component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature(fromStories.storyFeatureKey, fromStories.reducer),
    EffectsModule.forFeature([StoryEffect]),
  ],
  declarations: [
    StoryListComponent,
    StoryDetailsComponent,
    StoryTitleComponent,
  ],
})
export class StoriesModule {}
