import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './stories/story-list/story-list-component';
import { StoryDetailsComponent } from './stories/story-details/story-details-component';

const routes: Routes = [
  { path: '', component: StoryListComponent },
  { path: 'story/:id', component: StoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
