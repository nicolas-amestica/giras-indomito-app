import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent { }
