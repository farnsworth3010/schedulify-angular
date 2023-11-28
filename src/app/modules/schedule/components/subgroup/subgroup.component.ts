import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlainLesson } from '../../../../core/interfaces/plainLesson';

@Component({
  selector: 'app-subgroup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subgroup.component.html',
  styleUrl: './subgroup.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubgroupComponent {
  @Input() subgroup!: IPlainLesson;
}
