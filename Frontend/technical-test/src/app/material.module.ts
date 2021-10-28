import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [  
    MatToolbarModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
