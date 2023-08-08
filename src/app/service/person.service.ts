import { Injectable } from "@angular/core";
import { IPersonService } from "../core/services/IPerson.service";
import { IPersonRepository } from "../core/repositories/IPerson.repository";
import { Observable } from "rxjs";
import { PersonModel } from "../core/domain/person.model";
import { FriendListModel } from "../core/domain/friendList.model";

@Injectable({
    providedIn: 'root',
})

export class PersonService extends IPersonService{
    constructor(private PersonRepository:IPersonRepository){
        super()
    }

    override getProfileData(): Observable<PersonModel> {
        return this.PersonRepository.getProfileData();
    }

    override getFriendsList(): Observable<FriendListModel> {
        return this.PersonRepository.getFriendsList();
    }
}