import { InputComponent } from './input.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ CommonModule, IonicModule ],
  exports: [InputComponent],
  declarations: [InputComponent]
})
export class InputModule { }
