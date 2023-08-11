import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { ServiceModule } from './service/service.module';
import { PresentationModule } from './presentation/presentation.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FrinedListEffects } from './store/effects/friendList.effect';
import { ProfileEffects } from './store/effects/profile.effect';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DataModule,
    ServiceModule,
    PresentationModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ PostEffects , FrinedListEffects , ProfileEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge:20
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
