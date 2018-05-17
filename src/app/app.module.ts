import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule} from '@angular/material';
//import{} from '@angula/common';
import { HttpClientModule } from '@angular/common/http'
; import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule,HttpClientModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
