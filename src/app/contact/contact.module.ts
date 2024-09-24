import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './pages/contact.page';
import { SharedModule } from '../shared/shared.module';
import { ContactPageRoutingModule } from './contact-routing.module';
import { IntroductionContactComponent } from './components/introduction/introduction.component';
import { ContentContactComponent } from './components/content/content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ContactPage,
    IntroductionContactComponent,
    ContentContactComponent
  ]
})
export class ContactPageModule {}
