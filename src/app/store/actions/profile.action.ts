import { createAction, props } from "@ngrx/store";
import { PersonModel } from "src/app/core/domain/person.model";

export const loadProfile = createAction('[profile screen] load Profile');
export const loadProfileSuccess = createAction('[profile screen] load Profile Success' , props<{ profile : PersonModel }> ());
export const loadProfileError = createAction('[profile screen] load Profile Error');
export const dummyAction = createAction('Dummy Action');
