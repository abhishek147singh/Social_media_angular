import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostsScreenComponent } from "./posts-screen.component";
import { PostListComponent } from "../components/post-list/post-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =[
    {path:'' , component:PostsScreenComponent}
]


@NgModule({
    declarations:[
        PostsScreenComponent,
        PostListComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class postsModule{
    constructor(){
        console.log("posts screen");
    }
};