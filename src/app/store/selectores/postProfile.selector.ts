import { createFeatureSelector , createSelector } from '@ngrx/store';
import { PostProfileModel } from 'src/app/core/domain/postProfile.model';

const getPostProfileState = createFeatureSelector<PostProfileModel> ('postProfile');

export const getPostProfle = createSelector(getPostProfileState , (state) => {
    return state;
})