import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostProfileModel } from 'src/app/core/domain/postProfile.model';
import { PostService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css']
})

export class PostsScreenComponent implements OnInit , OnDestroy {
  userData:PostProfileModel|undefined;
  postServiceSubscription:Subscription|undefined;

  constructor(private postService:PostService){}
 
  ngOnInit(): void {
    this.postServiceSubscription = this.postService.getProfileData().subscribe(data => {
       this.userData = data; 
     })
  }

  ngOnDestroy(): void {
    if(this.postServiceSubscription){
      this.postServiceSubscription?.unsubscribe();
    }
  }


}
