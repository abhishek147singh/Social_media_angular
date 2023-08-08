import { Injectable } from "@angular/core";
import { IPostService } from "../core/services/IPost.service";
import { Observable } from "rxjs";
import { PostListModel } from "../core/domain/postList.model";
import { PostListRespository } from "../data/repository/post.repository";
import { PostProfileModel } from "../core/domain/postProfile.model";

@Injectable({
    providedIn: 'root',
})

export class PostService extends IPostService {
    constructor(private postListRepository:PostListRespository){
        super()
    }

    override getPostListData(page:number): Observable<PostListModel> {
        return this.postListRepository.getPostListData(page);
    }

    override getProfileData(): Observable<PostProfileModel> {
        return this.postListRepository.getPostProfile();
    }
}