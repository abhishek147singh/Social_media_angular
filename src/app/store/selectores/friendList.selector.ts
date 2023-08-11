import { createFeatureSelector , createSelector } from '@ngrx/store';
import { FriendListModel } from 'src/app/core/domain/friendList.model';

const getFriendListState = createFeatureSelector<FriendListModel > ('friendList');

export const getFriendList = createSelector(getFriendListState , (state) => {
    return state;
})