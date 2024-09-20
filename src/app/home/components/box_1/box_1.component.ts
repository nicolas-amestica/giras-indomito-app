import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-box-1',
  templateUrl: './box_1.component.html',
  styleUrl: './box_1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Box1Component { }
