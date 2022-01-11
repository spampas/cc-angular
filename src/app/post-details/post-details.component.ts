import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder} from '@angular/forms';

import { PostService } from '../post.service';

import { Post } from '../posts';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  commentForm = this.formBuilder.group({
    body: ''
  });

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('postId'));
    this.postService.getSelectedPost(postIdFromRoute)
    .subscribe((post: Post) => this.post = post);
  }


  onSubmit(): void {
    this.commentForm.value.body
  }
}
