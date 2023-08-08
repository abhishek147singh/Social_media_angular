import { Component , OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostListModel, postListItem } from 'src/app/core/domain/postList.model';
import { PostService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {
  postData:PostListModel|undefined;
  postListSubscription:Subscription|undefined;
  currentPage:number = 1;

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.postListSubscription = this.postService.getPostListData(this.currentPage).subscribe(data => {
       this.postData = data;
    })
  }

  ngOnDestroy(): void {
    if(this.postListSubscription){
      this.postListSubscription.unsubscribe();
    }
  }

  loadData(){
    this.currentPage++;
    this.postListSubscription?.unsubscribe();

    this.postListSubscription = this.postService.getPostListData(this.currentPage).subscribe(data => {
      if(this.postData !== undefined){
        this.postData.List = [...this.postData.List, ...JSON.parse(JSON.stringify(data)).List];
        console.log(this.currentPage , data);
      }else{
        this.postData = JSON.parse(JSON.stringify(data));
      }
    })
  }

}
