import { listMapper } from "src/app/core/base/listMapper";
import { PostListModel , postListItem } from "src/app/core/domain/postList.model";
import { PostListEntity } from "src/app/entity/PostList.entity";

export class PostListRespositoryMapper extends listMapper<PostListEntity , PostListModel>{
    
    override mapFromList(param: PostListEntity): PostListModel {
        const PostList:PostListModel = {
            List : [],
            pageNo: -1
        };
    
        param.PostList.forEach(post => {
            PostList.List.push({
                Name: post.Name,
                ProfileImage: post.ProfileImage,
                PostImage: post.PostImage,
                Time: post.Time
            })
        });
        PostList.pageNo = param.PageNo;
        
        return PostList;
    }
}