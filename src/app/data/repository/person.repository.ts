import { HttpClient } from "@angular/common/http";
import { IPersonRepository } from "src/app/core/repositories/IPerson.repository";
import { PersonRepositoryMapper } from "../mapper/person-repository.mopper";
import { PersonModel } from "src/app/core/domain/person.model";
import { Observable, map } from "rxjs";
import { PersonEntity } from "src/app/entity/Person.entity";
import { Injectable } from "@angular/core";
import { FriendListEntity } from "src/app/entity/FriendList.entity";
import { FriendListModel } from "src/app/core/domain/friendList.model";


@Injectable({
    providedIn: 'root',
})

export class PersonRepository extends IPersonRepository{
    mapper = new PersonRepositoryMapper();

    header = {
        "headers":{
            "Token":"123",
            "AppVersion":"100",
            "GroupId":"1"
        }
    };

    constructor(private http:HttpClient){
        super();
    }

    override getProfileData(): Observable<PersonModel> {
        return this.http.post<PersonEntity>("/api/demoapi/demo/Getprofile?UserId=1", {} , this.header)
        .pipe(
            map((personAsEntityModel) => this.mapper.mapFrom(personAsEntityModel))
        );
    }

    override getFriendsList(): Observable<FriendListModel> {
        return this.http.post<FriendListEntity> ( "/api/demoapi/demo/GetConversation" , {} , this.header)
        .pipe(
            map((friendList) => this.mapper.mapFromList(friendList))
        ); 
    }
}