import { createReducer , Action  ,on } from '@ngrx/store';
import { PostListModel } from 'src/app/core/domain/postList.model';
import { loadPosts, loadPostsSuccess } from '../actions/posts.actions';

const inititalState:PostListModel = {
    List:[],
    pageNo:-1
}


const _postReducer = createReducer( 
    inititalState,
    on(loadPosts , (state : PostListModel , action) => {
        return state;
    }),
    on(loadPostsSuccess , (state : PostListModel , action )  => {
        return {
            List:[...state.List  , ...action.posts.List],
            pageNo:action.pageNo
        };
    }), 
 )


export function postReducer(state : PostListModel | undefined , action : Action ){
    return _postReducer(state , action);
}