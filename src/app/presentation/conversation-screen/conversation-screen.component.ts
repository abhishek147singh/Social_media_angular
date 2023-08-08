import { Component , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-conversation-screen',
  templateUrl: './conversation-screen.component.html',
  styleUrls: ['./conversation-screen.component.css']
})
export class ConversationScreenComponent implements AfterViewInit {
    
    currentUser:{Name:string, LastMessage:string , ProfileImage:string}|undefined; 

    ngAfterViewInit(): void {
  
    }
    
    updateCurrentUser(user:{Name:string, LastMessage:string , ProfileImage:string}|undefined){
      this.currentUser = user;
    }
}
