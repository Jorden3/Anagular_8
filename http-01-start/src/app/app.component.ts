import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(data => {
        this.isFetching = false;
        this.loadedPosts = data;
      },
        error => {
          this.isFetching = false;
          this.error = error.message;
        });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(data => {
        this.isFetching = false;
        this.loadedPosts = data;
      },
        error => {
          this.isFetching = false;
          this.error = error.message;
        });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts()
      .subscribe((data) => {
        console.log(data);
        this.loadedPosts = [];
      });
  }

  onHandleError() {
    this.isFetching = false;
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
