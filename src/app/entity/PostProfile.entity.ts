export interface PostProfileEntity{
    Status: boolean,
    Message: string,
    UserId: number,
    Name: string,
    ProfileImage: string,
    FriendList: { Name: string, ProfileImage: string }[],
    PageNo: number
}