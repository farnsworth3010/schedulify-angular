import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Schedule } from '../../../core/interfaces/schedule';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent {
  @Input() lesson: Schedule[] = [];
  @Input() i: number = 0;
}
