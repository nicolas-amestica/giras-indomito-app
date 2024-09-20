import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ServicesPage } from './pages/services.page';
import { ServicesPageRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesPageRoutingModule,
    SharedModule,
  ],
  declarations: [ServicesPage]
})
export class ServicesPageModule {}
