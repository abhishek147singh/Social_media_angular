import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FriendListModel } from 'src/app/core/domain/friendList.model';
import { PersonService } from 'src/app/service/person.service';
import { loadFriendList } from 'src/app/store/actions/FriendList.action';
import { AppState } from 'src/app/store/models/appState.model';
import { getFriendList } from 'src/app/store/selectores/friendList.selector';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})

export class FriendListComponent implements OnInit , OnDestroy {

  @Output() updateCurrentUser = new EventEmitter<{Name:string, LastMessage:string , ProfileImage:string} | undefined> (); 
  friendList:FriendListModel|undefined;
  originalData:FriendListModel|undefined; 
  FrinedListSubscription:Subscription|undefined;

  currentUser =  {
    Name:"Name",
    LastMessage:"Acting is just a way of living...",
    ProfileImage:"./../../assets/profile.jpeg"
  };

  constructor(private store: Store<AppState> ){}

   ngOnInit(): void {
      this.store.dispatch(loadFriendList());
      this.store.select(getFriendList).subscribe(data => {
        this.friendList = data;
        this.originalData = data;
        this.updateCurrentUser.emit(this.friendList.List?.at(0));
      })
   }

   ngOnDestroy(): void {
      if(this.FrinedListSubscription){
        this.FrinedListSubscription.unsubscribe();
      } 
   }

   fiterFriends(key:string){
      if(this.friendList !== undefined && this.originalData !== undefined){
        this.friendList.List =  this.originalData.List.filter(frined => {
          return frined.Name.toLowerCase().includes(key.toLowerCase());
        })
      }
   }

  getConversationScreen(i:number){
    if(this.friendList !== undefined && this.originalData !== undefined){
      this.currentUser = this.friendList?.List[i];
      this.updateCurrentUser.emit(this.currentUser);
    }
 }

}
