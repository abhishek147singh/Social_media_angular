export interface PostListEntity {
    Status: boolean;
    Message: string;
    PostList: { Name: string, ProfileImage: string,PostImage: string,Time: string }[];
    PageNo: number;
  }