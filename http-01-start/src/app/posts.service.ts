import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://angular-61cea.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      },
        err => {
          this.error.next(err.message);
        });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string]: Post }>(
      'https://angular-61cea.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams
      }
    )
      .pipe(map((data) => {
        const postArray: Post[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            postArray.push({ ...data[key], id: key });
          }
        }
        return postArray;
      }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );

  }

  deletePosts() {
    return this.http.delete('https://angular-61cea.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        console.log(event.type);
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
