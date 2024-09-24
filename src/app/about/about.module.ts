import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './pages/about.page';
import { SharedModule } from '../shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { IntroductionAboutComponent } from './components/introduction/introduction.component';
import { ContentAboutComponent } from './components/content/content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    AboutPage,
    IntroductionAboutComponent,
    ContentAboutComponent
  ]
})
export class AboutPageModule {}
