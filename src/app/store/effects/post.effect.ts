import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostService } from './../../service/posts.service';
import {loadPosts, loadPostsError, loadPostsSuccess, loadProfileError, loadProfileSuccess } from './../actions/posts.actions';
import {catchError, map, switchMap , tap } from 'rxjs/operators';
import {of , withLatestFrom} from 'rxjs';
import { loadProfile } from "./../actions/posts.actions";
import { Store } from '@ngrx/store';
import { AppState } from '../models/appState.model';
import { getPostProfle } from '../selectores/postProfile.selector';
import { dummyAction } from '../actions/profile.action';
import { getPostList } from '../selectores/post.selector';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions, // this is an RxJS stream of all actions
        private postService: PostService,
        private store:Store<AppState>
    ) {}

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPosts),
            withLatestFrom(this.store.select(getPostList)),
            switchMap(([action , postList]) => {
                if( postList.List.length === 0 || action.pageNo > (postList.pageNo)){
                    return this.postService.getPostListData(action.pageNo).pipe(
                        map(posts => loadPostsSuccess({ posts , pageNo:action.pageNo})),
                        catchError(() => of(loadPostsError()))
                    )
                }

                return of(dummyAction());
            })
        )
   );

   loadPostProfile$ = createEffect(() => this.actions$.pipe(
       ofType(loadProfile),
       withLatestFrom(this.store.select(getPostProfle)),
       switchMap(([action , postProfile]) => {
        if(postProfile.UserId === -1){
            return this.postService.getProfileData().pipe(
                map(profile => loadProfileSuccess({ profile })),
                catchError(() => of(loadProfileError()))
            )
        }

        return of(dummyAction());
       })
   ))
}