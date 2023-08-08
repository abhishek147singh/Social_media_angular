export interface PersonModel{
    Description:string;
    FollowersCount:number;
    FollowsCount:number;
    Location:string; 
    Message:string; 
    Name:string;
    PhotoList:{ Image:string }[];
    PhotosCount:number;
    Status:boolean;
    UserId:number;
}