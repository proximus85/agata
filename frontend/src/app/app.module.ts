import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {GownoComponent} from './gowno/gowno.component';
import { AnimalComponent } from './animal/animal.component';
import { WafelComponent } from './wafel/wafel.component';
import { SpermaComponent } from './sperma/sperma.component';
import { TestowyComponent } from './testowy/testowy.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GownoComponent,
    AnimalComponent,
    WafelComponent,
    SpermaComponent,
    TestowyComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
