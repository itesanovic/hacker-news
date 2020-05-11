import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap, take, skip, filter, toArray } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { storiesPerPage } from '../constants';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  readonly hackerNewsUrl = 'https://hacker-news.firebaseio.com/v0';
  readonly jsonExtension = '.json';

  constructor(private http: HttpClient) {}

  public loadTopStories(page: number) {
    return this.http
      .get<any>(`${this.hackerNewsUrl}/topstories${this.jsonExtension}`)
      .pipe(
        mergeMap((data) => data),
        mergeMap((id) => this.loadDetails(id)),
        filter((data) => !data['deleted'] || !data['dead']),
        skip(page * storiesPerPage),
        take(storiesPerPage),
        toArray(),
        catchError((error) => throwError(error))
      );
  }

  public loadDetails(id: any) {
    return this.http
      .get(`${this.hackerNewsUrl}/item/${id}${this.jsonExtension}`)
      .pipe(catchError((error) => throwError(error)));
  }
}
