import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/reducer-store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effect-store';
<<<<<<< Updated upstream
import { ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> Stashed changes
import { CvaInputComponent } from './table/cva-input/cva-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CvaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ post: postReducer }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
