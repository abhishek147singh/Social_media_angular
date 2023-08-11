import { createFeatureSelector , createSelector } from '@ngrx/store';
import { PostListModel } from 'src/app/core/domain/postList.model';


const getPostState = createFeatureSelector<PostListModel> ('posts');

export const getPostList = createSelector(getPostState , (state) => {
    return state;
})