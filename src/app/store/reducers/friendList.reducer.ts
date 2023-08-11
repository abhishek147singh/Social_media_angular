import { Action, createReducer , on } from "@ngrx/store";
import { FriendListModel } from "src/app/core/domain/friendList.model";
import { loadFriendList, loadFriendListSuccess } from "../actions/FriendList.action";

const inititalState:FriendListModel = {
    List:[]
};

const _friendListReducer = createReducer(
    inititalState,
    on(loadFriendList , (state) => state ),
    on(loadFriendListSuccess , ((state , action) => action.friendList ))
);


export function friendListReducer(state: FriendListModel | undefined , action: Action){
    return _friendListReducer(state , action);
}