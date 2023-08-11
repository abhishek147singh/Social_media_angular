import { FriendListModel } from "src/app/core/domain/friendList.model";
import { PersonModel } from "src/app/core/domain/person.model";
import { PostListModel } from "src/app/core/domain/postList.model";
import { PostProfileModel } from "src/app/core/domain/postProfile.model";

export interface AppState{
    posts:PostListModel,
    profile:PersonModel,
    friendList:FriendListModel,
    postProfile:PostProfileModel,
}