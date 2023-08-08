import { Component, Input } from '@angular/core';
import { PersonModel } from 'src/app/core/domain/person.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profileData:PersonModel |undefined;

}