import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Box1Component } from './components/box_1/box_1.component';
import { Box2Component } from './components/box_2/box_2.component';
import { Box3Component } from './components/box_3/box_3.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePage,
    Box1Component,
    Box2Component,
    Box3Component
  ]
})
export class HomePageModule {}
