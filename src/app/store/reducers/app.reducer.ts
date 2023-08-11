import { friendListReducer } from "./friendList.reducer";
import { postReducer } from "./post.reducer";
import { postProfileReducer } from "./postProfile.reducer";
import { profileReducer } from "./profile.reducer";

export const appReducer = {
    posts:postReducer,
    postProfile:postProfileReducer,
    friendList:friendListReducer,
    profile:profileReducer
}