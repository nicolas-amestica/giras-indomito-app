import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ServicesPage } from './pages/services.page';
import { ServicesPageRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IntroductionServicesComponent } from './components/introduction/introduction.component';
import { ContentServicesComponent } from './components/content/content.component';
import { ContactServicesComponent } from './components/contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ServicesPage,
    IntroductionServicesComponent,
    ContentServicesComponent,
    ContactServicesComponent
  ]
})
export class ServicesPageModule {}
