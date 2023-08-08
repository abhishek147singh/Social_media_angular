import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Routes , RouterModule} from "@angular/router";
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { ConversationScreenComponent } from './conversation-screen/conversation-screen.component';
import { ConversationWindowComponent } from './components/conversation-window/conversation-window.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes:Routes = [
    {path:'posts',component:PostsScreenComponent},
    {path:'chat',component:ConversationScreenComponent},
    {path:'', component: ProfileScreenComponent},
]

@NgModule({
  declarations: [
    ProfileScreenComponent,
             ProfileComponent,
             SkillsComponent,
             GalleryComponent,
             PostsScreenComponent,
             ConversationScreenComponent,
             ConversationWindowComponent,
             FriendListComponent,
             PostListComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    ProfileScreenComponent,
    ProfileComponent,
    SkillsComponent,
    GalleryComponent,
    RouterModule
  ]
})

export class PresentationModule { }