import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, retryWhen, switchMap , tap, withLatestFrom } from 'rxjs/operators';
import {of} from 'rxjs';
import { loadFirendListError, loadFriendList, loadFriendListSuccess } from '../actions/FriendList.action';
import { PersonService } from 'src/app/service/person.service';
import { AppState } from '../models/appState.model';
import { Store } from '@ngrx/store';
import { getFriendList } from '../selectores/friendList.selector';
import { dummyAction } from '../actions/profile.action';

@Injectable()
export class FrinedListEffects {
    constructor(
        private actions$: Actions, // this is an RxJS stream of all actions
        private personService: PersonService,
        private store:Store<AppState>
    ) {}

    loadFriendList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadFriendList),
            withLatestFrom(this.store.select(getFriendList)),
            switchMap(([action , friendList]) => {
    
                if(friendList.List.length === 0){
                    return this.personService.getFriendsList().pipe(
                        map(friendList => loadFriendListSuccess({ friendList })),
                        catchError(() => of(loadFirendListError()))
                    )
                }

                return of(dummyAction());
            })
        )
   );
}