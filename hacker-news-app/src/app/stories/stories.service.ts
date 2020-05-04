import { HttpClient } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoriesService {
    constructor(private http: HttpClient) { }

    public loadStories(): Observable<any> {
        console.log('Loading stories from service...');
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json').pipe(
            catchError(error => throwError(error))
        );
    }
}