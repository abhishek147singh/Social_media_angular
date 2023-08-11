import { createReducer , Action  ,on } from '@ngrx/store';
import { PostListModel } from 'src/app/core/domain/postList.model';
import { loadPosts, loadPostsSuccess, loadProfile, loadProfileSuccess } from '../actions/posts.actions';
import { state } from '@angular/animations';
import { PostProfileModel } from 'src/app/core/domain/postProfile.model';

const inititalState:PostProfileModel = {
    UserId: -1,
    Name:'',
    ProfileImage: './../../assets/profile.jpeg',
    FriendList: [],
    PageNo:1
};


const _postProfileReducer = createReducer( 
    inititalState,
    on(loadProfile , (state : PostProfileModel , action) => {
        return state;
    }),
    on(loadProfileSuccess , (state : PostProfileModel , action )  => {
       return action.profile;
    }), 
 )


export function postProfileReducer(state : PostProfileModel | undefined , action : Action ){
    return _postProfileReducer(state , action);
}