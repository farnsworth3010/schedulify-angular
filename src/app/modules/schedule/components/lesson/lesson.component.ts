import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlainLesson} from '../../../../core/interfaces/plainLesson';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent {
  @Input() pair: IPlainLesson[] = [];
  @Input() i: number = 0;
}
