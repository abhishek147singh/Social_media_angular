import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FriendListComponent } from "../components/friend-list/friend-list.component";
import { ConversationWindowComponent } from "../components/conversation-window/conversation-window.component";
import { ConversationScreenComponent } from "./conversation-screen.component";
import { RouterModule, Routes } from "@angular/router";

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
        RouterModule.forChild(routes)
    ],
})

export class conversationModule{
    constructor(){
        console.log("converstion screen");
    }
};