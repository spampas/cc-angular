import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Comment } from './comments';
import { User } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments?postId=' +
        postId.toString()
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(
      'https://jsonplaceholder.typicode.com/comments',
      comment
    );
  }
}
