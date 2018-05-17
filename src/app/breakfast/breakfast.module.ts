import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { BreakfastRoutingModule } from './breakfast-routing.module';
import { BreakfastListComponent } from './breakfast-list/breakfast-list.component';
import { HttpClientModule } from '@angular/common/http'
; import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    BreakfastRoutingModule,FormsModule,
    MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule
  ],
  declarations: [BreakfastListComponent]
})
export class BreakfastModule { }
