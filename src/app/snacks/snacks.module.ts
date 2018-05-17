import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { SnacksRoutingModule } from './snacks-routing.module';
import { SnacksListComponent } from './snacks-list/snacks-list.component';
import { HttpClientModule } from '@angular/common/http'
; import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SnacksRoutingModule,FormsModule,
    MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule
  ],
  declarations: [SnacksListComponent]
})
export class SnacksModule { }
