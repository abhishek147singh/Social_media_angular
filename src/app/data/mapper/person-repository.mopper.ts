import { listMapper } from "src/app/core/base/listMapper";
import { Mapper } from "src/app/core/base/mapper";
import { FriendListModel } from "src/app/core/domain/friendList.model";
import { PersonModel } from "src/app/core/domain/person.model";
import { FriendListEntity } from "src/app/entity/FriendList.entity";
import { PersonEntity } from "src/app/entity/Person.entity";

export class PersonRepositoryMapper implements Mapper<PersonEntity, PersonModel> , listMapper<FriendListEntity , FriendListModel> {


    mapFrom(param:PersonEntity):PersonModel{
        return {
            Description:param.Description,
            FollowersCount:param.FollowersCount,
            FollowsCount:param.FollowsCount,
            Location:param.Location,
            Message:param.Message,
            Name:param.Name,
            PhotoList:param.PhotoList,
            PhotosCount:param.PhotosCount,
            Status:param.Status,
            UserId:param.UserId
        };
    }

    mapTo(param:PersonModel):PersonEntity{
        return {
            Description:param.Description,
            FollowersCount:param.FollowersCount,
            FollowsCount:param.FollowsCount,
            Location:param.Location,
            Message:param.Message,
            Name:param.Name,
            PhotoList:param.PhotoList,
            PhotosCount:param.PhotosCount,
            Status:param.Status,
            UserId:param.UserId
        };
    }

    mapFromList(param: FriendListEntity ): FriendListModel {
        let friendListModel: FriendListModel = {
            List:[]
        };

        param.FriendList.forEach(friend => {
            friendListModel.List.push({
                Name:friend.Name,
                ProfileImage:friend.ProfileImage,
                LastMessage:friend.LastMessage
            });
        })

        return friendListModel;
    }
}