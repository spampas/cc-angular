import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms';

import { CommentService } from '../comment.service';

import { LoginService } from '../login.service';

import { Comment } from '../comments';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  postId: number = 0;
  commentForm = this.form.group({
    body: '',
  });

  constructor(
    private commentService: CommentService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.postId = Number(routeParams.get('postId'));
    this.commentService
      .getComments(this.postId)
      .subscribe((comments) => (this.comments = comments));
  }

  onSubmit() {
    const comment = {
      postId: this.postId,
      id: 0,
      name: this.commentForm.value.body,
      email: 'gino pastino',
      body: this.commentForm.value.body,
    };

    this.commentService.addComment(comment);
  }
}
