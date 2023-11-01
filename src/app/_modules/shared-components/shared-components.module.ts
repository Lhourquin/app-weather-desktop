import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from '@app/_components/_global/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent

  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,

  ],
  exports : [
    LoadingComponent
  ]
})
export class SharedComponentsModule { }
