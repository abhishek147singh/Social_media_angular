import { createAction, props } from "@ngrx/store";
import { FriendListModel } from "src/app/core/domain/friendList.model";

export const loadFriendList = createAction('[conversation screen] loadFriendList');
export const loadFriendListSuccess = createAction('[conversation screen] loadFriendList Success' , props<{ friendList : FriendListModel }> ());
export const loadFirendListError = createAction('[conversation screen] loadFrinedListError');

