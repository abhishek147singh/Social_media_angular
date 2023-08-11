import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PostProfileModel } from 'src/app/core/domain/postProfile.model';
import { PostService } from 'src/app/service/posts.service';
import { loadProfile } from 'src/app/store/actions/posts.actions';
import { AppState } from 'src/app/store/models/appState.model';
import { getPostProfle } from 'src/app/store/selectores/postProfile.selector';

@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css']
})

export class PostsScreenComponent implements OnInit , OnDestroy {
  userData:PostProfileModel|undefined;
  postServiceSubscription:Subscription|undefined;

  constructor(private store : Store<AppState> ){}
 
  ngOnInit(): void {
     this.store.dispatch(loadProfile());
     this.store.select(getPostProfle).subscribe(data => {
        this.userData = data;
     })
  }

  ngOnDestroy(): void {
    if(this.postServiceSubscription){
      this.postServiceSubscription?.unsubscribe();
    }
  }
}
