import { createFeatureSelector , createSelector } from '@ngrx/store';
import { PersonModel } from 'src/app/core/domain/person.model';

const getProfileState = createFeatureSelector<PersonModel> ('profile');

export const getProfile = createSelector(getProfileState , (state) => {
    return state;
});