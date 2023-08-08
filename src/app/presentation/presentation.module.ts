import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes , RouterModule} from "@angular/router";

const routes:Routes = [
    {path:'', loadChildren:() => import('./profile-screen/profile.module').then((m) => m.ProfileModule)},
    {path:'posts', loadChildren:() => import('./posts-screen/posts.module').then((m) => m.postsModule)},
    {path:'chat',loadChildren:() => import('./conversation-screen/conversationScreen.module').then((m) => m.conversationModule)},
]

@NgModule({
  declarations: [
  ],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class PresentationModule { }