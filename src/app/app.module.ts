import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CustomMaterialDesignModule } from './md-custom/md-custom.module';
import { FretboardComponent } from './fretboard/fretboard.component';
import { WebsocketService } from './websocket.service';
import { FretboardService } from './fretboard/fretboard.service';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    CustomMaterialDesignModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFireDatabase, WebsocketService, FretboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
