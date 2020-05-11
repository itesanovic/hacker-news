import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'story-details',
  templateUrl: 'story-details-component.html',
  styleUrls: ['story-details-component.scss'],
})
export class StoryDetailsComponent implements OnInit {
  id;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
  }
}
