import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostsScreenComponent } from "./posts-screen.component";
import { PostListComponent } from "../components/post-list/post-list.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { postProfileReducer } from "src/app/store/reducers/postProfile.reducer";
import { postReducer } from "src/app/store/reducers/post.reducer";

const routes:Routes =[
    {path:'' , component:PostsScreenComponent}
]
//posts:postReducer,

@NgModule({
    declarations:[
        PostsScreenComponent,
        PostListComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('postProfile', postProfileReducer),
        StoreModule.forFeature('posts' , postReducer)
    ]
})

export class postsModule{
    constructor(){
        console.log("posts screen");
    }
};