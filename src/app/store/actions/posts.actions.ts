import { createAction , props } from '@ngrx/store';
import { PostListModel } from 'src/app/core/domain/postList.model';
import { PostProfileModel } from 'src/app/core/domain/postProfile.model';

export const loadPosts = createAction('[Posts List] Load Posts' , props<{ pageNo:number }> ());
export const loadPostsSuccess = createAction('[Posts List] Load Posts Success', props< { posts: PostListModel , pageNo : number }> ());
export const loadPostsError = createAction('[Posts List] Load Posts Error');


export const loadProfile = createAction('[Posts screen] Load Profile');
export const loadProfileSuccess = createAction('[Posts screen] Load Profile Success', props< { profile : PostProfileModel }> ());
export const loadProfileError = createAction('[Posts screen] Load Profile Error');