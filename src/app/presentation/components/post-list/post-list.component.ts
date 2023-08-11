import { Component , OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostListModel, postListItem } from 'src/app/core/domain/postList.model';
import { PostService } from 'src/app/service/posts.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/appState.model';
import { loadPosts } from 'src/app/store/actions/posts.actions';
import { getPostList } from 'src/app/store/selectores/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {
  postData:PostListModel|undefined;
  postListSubscription:Subscription|undefined;
  currentPage:number = 1;

  constructor(private postService:PostService , private store : Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(loadPosts({pageNo:1}));
    this.postListSubscription = this.store.select(getPostList).subscribe(data => {
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
    this.store.dispatch(loadPosts({ pageNo : this.currentPage}));
  }

}
