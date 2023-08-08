export interface PostProfileModel{
    UserId: number,
    Name: string,
    ProfileImage: string,
    FriendList: { Name: string, ProfileImage: string }[],
    PageNo: number
}