import { Observable } from "rxjs";
import { PostListModel } from "../domain/postList.model";
import { PostProfileModel } from "../domain/postProfile.model";

export abstract class IPostService{
    abstract getPostListData(page:number):Observable<PostListModel>;
    abstract getProfileData():Observable<PostProfileModel>;
}