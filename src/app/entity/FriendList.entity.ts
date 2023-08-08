export interface FriendListEntity{
    Status: boolean;
    Message: string;
    FriendList: 
      {
        Name: string,
        ProfileImage: string,
        LastMessage: string
      }[];
  }