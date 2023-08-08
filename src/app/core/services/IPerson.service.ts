import { Observable } from "rxjs";
import { PersonModel } from "../domain/person.model";
import { FriendListModel } from "../domain/friendList.model";

export abstract class IPersonService {
    abstract getProfileData(): Observable<PersonModel>;
    abstract getFriendsList():Observable<FriendListModel>;
}