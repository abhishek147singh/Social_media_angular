import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { PostListModel } from "src/app/core/domain/postList.model";
import { IPostRepository } from "src/app/core/repositories/IPost.repository";
import { PostListRespositoryMapper } from "../mapper/post-list-repository.mapper";
import { PostListEntity } from "src/app/entity/PostList.entity";
import { Injectable } from "@angular/core";
import { PostProfileModel } from "src/app/core/domain/postProfile.model";
import { PostProfileMapper } from "../mapper/post-profile-mapper";
import { PostProfileEntity } from "src/app/entity/PostProfile.entity";


@Injectable({
    providedIn: 'root',
})

export class PostListRespository extends IPostRepository{

    mapper = new PostListRespositoryMapper();
    profileDataMapper = new PostProfileMapper();

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

    override getPostListData(page:number): Observable<PostListModel> {
        return this.http.post<PostListEntity>(`/api/demoapi/demo/PostData?PageNo=${page}`, {} , this.header).pipe( map(posts => this.mapper.mapFromList(posts)));
    }

    override getPostProfile(): Observable<PostProfileModel> {
        return this.http.post<PostProfileEntity>("/api/demoapi/demo/main", {} , this.header).pipe(map(data => this.profileDataMapper.mapFrom(data)));
    }
}