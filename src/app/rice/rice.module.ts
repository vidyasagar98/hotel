import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RiceRoutingModule } from './rice-routing.module';
import { RiceListComponent } from './rice-list/rice-list.component';
import { HttpClientModule } from '@angular/common/http'
; import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RiceRoutingModule,FormsModule,
    MatCardModule,MatCheckboxModule,MatButtonModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatMenuModule
  ],
  declarations: [RiceListComponent]
})
export class RiceModule { }
