import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { DiabeticRoutingModule } from './diabetic-routing.module';
import { HttpClientModule } from '@angular/common/http'
; import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule} from '@angular/material';
import { DiabeticListComponent } from './diabetic-list/diabetic-list.component';


@NgModule({
  imports: [
    CommonModule,
    DiabeticRoutingModule,FormsModule,
    MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule
  ],
  declarations: [DiabeticListComponent]
})
export class DiabeticModule { }
