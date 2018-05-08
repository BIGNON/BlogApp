import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() articleTitle : string;
  @Input() articleContent : string;
  @Input() articleLoveIts : number;
  @Input() articleDate : Date;

  constructor() { }

  ngOnInit() {
  }

  onCalculateLoveIt(cmpt){
    this.articleLoveIts += cmpt ;
  }
  
}
