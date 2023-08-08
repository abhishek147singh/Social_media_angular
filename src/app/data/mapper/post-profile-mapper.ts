import { Mapper } from "src/app/core/base/mapper";
import { PostProfileModel } from "src/app/core/domain/postProfile.model";
import { PostProfileEntity } from "src/app/entity/PostProfile.entity";

export class PostProfileMapper extends Mapper<PostProfileEntity , PostProfileModel>{
    
    override mapFrom(param: PostProfileEntity): PostProfileModel {   

        return {
            UserId: param.UserId,
            Name: param.Name,
            ProfileImage: param.ProfileImage,
            FriendList: [...param.FriendList],
            PageNo: param.PageNo
        };
    }

    override mapTo(param: PostProfileModel): PostProfileEntity {
        return {
            Status:true,
            Message:"send",
            Name:param.Name,
            UserId:param.UserId,
            ProfileImage:param.ProfileImage,
            FriendList:[...param.FriendList],
            PageNo:param.PageNo,
        };
    }
}