import { Component, Input } from '@angular/core';

@Component({
  selector: 'story-title',
  templateUrl: 'story-title-component.html',
  styleUrls: ['story-title-component.scss'],
})
export class StoryTitleComponent {
  @Input() story;

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
