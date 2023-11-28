import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubgroupComponent } from '../subgroup/subgroup.component';
import { IPlainLesson } from '../../../../core/interfaces/plainLesson';

@Component({
  selector: 'app-pair',
  standalone: true,
  imports: [CommonModule, SubgroupComponent],
  templateUrl: './pair.component.html',
  styleUrl: './pair.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PairComponent {
  @Input() pair: IPlainLesson[] = []
}
