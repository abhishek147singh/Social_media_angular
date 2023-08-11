import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FriendListComponent } from "../components/friend-list/friend-list.component";
import { ConversationWindowComponent } from "../components/conversation-window/conversation-window.component";
import { ConversationScreenComponent } from "./conversation-screen.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { friendListReducer } from "src/app/store/reducers/friendList.reducer";

const routes:Routes = [
    {path:'', component:ConversationScreenComponent}
];


@NgModule({
    declarations:[
        ConversationScreenComponent,
        FriendListComponent,
        ConversationWindowComponent,
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('friendList', friendListReducer)
    ],
})

export class conversationModule{
    constructor(){
        console.log("conversation screen");
    }
};