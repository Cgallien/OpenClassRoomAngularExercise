import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input()
  post: any;

  constructor() { }

  ngOnInit() {
  }

  OnLike(){
    this.post.loveIts ++;
  }

  OnDislike()
  {
    this.post.loveIts --;
  }

}
