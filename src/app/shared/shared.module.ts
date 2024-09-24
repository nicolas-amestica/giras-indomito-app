import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FootbarComponent } from './components/footbar/footbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FootbarComponent
  ],
  declarations: [
    ToolbarComponent,
    FootbarComponent
  ],
  providers: [],
})
export class SharedModule { }
