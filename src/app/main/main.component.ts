import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostData } from '../shared'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  posts: Array<PostData>  

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.postService.getList()
      .then(data => {
        this.posts = <Array<PostData>>data
      }, err => {
        console.log(err)
      });
  }

}
