import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getSelectedPost(id: number) {
    return this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id.toString()
    );
  }
}
