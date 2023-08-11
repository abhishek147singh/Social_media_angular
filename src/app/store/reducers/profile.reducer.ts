import { Action, createReducer, on } from "@ngrx/store";
import { PersonModel } from "src/app/core/domain/person.model";
import { loadProfile, loadProfileSuccess } from "../actions/profile.action";

const inititalState: PersonModel = {
    Description:'',
    FollowersCount:0,
    FollowsCount:0,
    Location:'',
    Message:'',
    Name:'',
    PhotoList:[],
    PhotosCount:0,
    Status:false,
    UserId:-1,
} 

const _profileReducer = createReducer(
    inititalState, 
    on( loadProfile , (state : PersonModel , action ) =>{
        return state;
    }),
    on(loadProfileSuccess , (state : PersonModel , action) =>  {
        return action.profile;
    })
)

export function profileReducer(state:PersonModel | undefined, action :Action){
    return _profileReducer(state , action);
}