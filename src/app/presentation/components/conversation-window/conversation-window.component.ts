import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './conversation-window.component.html',
  styleUrls: ['./conversation-window.component.css']
})

export class ConversationWindowComponent {
  @Input() currentUser : {Name:string , LastMessage:string , ProfileImage:string} | undefined =  {
    Name:"Name",
    LastMessage:"Acting is just a way of living...",
    ProfileImage:"./../../assets/profile.jpeg"
  };

}
