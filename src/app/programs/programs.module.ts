import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgramsPage } from './pages/programs.page';
import { SharedModule } from '../shared/shared.module';
import { ProgramsPageRoutingModule } from './programs-routing.module';
import { ContentProgramsComponent } from './components/content/content.component';
import { IntroductionProgramsComponent } from './components/introduction/introduction.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramsPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ProgramsPage,
    IntroductionProgramsComponent,
    ContentProgramsComponent
  ]
})
export class ProgramsPageModule {}
