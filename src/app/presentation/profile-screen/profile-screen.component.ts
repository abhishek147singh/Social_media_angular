import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/core/domain/person.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/appState.model';
import { loadProfile } from 'src/app/store/actions/profile.action';
import { getProfile } from 'src/app/store/selectores/profile.selector';


@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit , OnDestroy{
  
  profileData:PersonModel|undefined;
  personDataSubscription:Subscription|undefined; 
  constructor(private store : Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(loadProfile());
    this.personDataSubscription = this.store.select(getProfile).subscribe(data => {
      this.profileData = data;
    })
  }



  ngOnDestroy(): void {
    if(this.personDataSubscription)
      this.personDataSubscription.unsubscribe();
  }
}