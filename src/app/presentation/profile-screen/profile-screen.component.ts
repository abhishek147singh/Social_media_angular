import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/core/domain/person.model';
import { PersonService } from 'src/app/service/person.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit , OnDestroy{
  
  profileData:PersonModel|undefined;
  personDataSubscription:Subscription|undefined; 
  constructor(private personService:PersonService){}

  ngOnInit(): void {
    this.personDataSubscription = this.personService.getProfileData().subscribe((data) => {
      this.profileData = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    if(this.personDataSubscription)
      this.personDataSubscription.unsubscribe();
  }
}