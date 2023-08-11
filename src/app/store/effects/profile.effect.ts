import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap , tap } from 'rxjs/operators';
import {of , withLatestFrom } from 'rxjs';
import { PersonService } from 'src/app/service/person.service';
import { dummyAction, loadProfile, loadProfileError, loadProfileSuccess } from '../actions/profile.action';
import { AppState } from '../models/appState.model';
import { Store } from '@ngrx/store';
import { getProfile } from '../selectores/profile.selector';

@Injectable()
export class ProfileEffects {
    constructor(
        private actions$: Actions, 
        private personService: PersonService,
        private store:Store<AppState>
    ) {}

    loadFriendList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProfile),
            withLatestFrom(this.store.select(getProfile)),
            switchMap(([action , profile]) => {
                if(profile.UserId === -1){
                    return this.personService.getProfileData().pipe(
                        map(profile => loadProfileSuccess({profile})),
                        catchError(() => of(loadProfileError()))
                    );
                }

                return of(dummyAction());
            })
        )
   );
}