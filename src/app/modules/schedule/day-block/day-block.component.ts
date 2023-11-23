import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Schedule } from '../../../core/interfaces/schedule';
import { LessonComponent } from '../lesson/lesson.component';

@Component({
  selector: 'app-day-block',
  standalone: true,
  imports: [CommonModule, LessonComponent],
  templateUrl: './day-block.component.html',
  styleUrl: './day-block.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayBlockComponent implements OnInit {
  scheduleList: Schedule[][] = [];
  @Input() isWeekend: boolean = false;
  @Input({ required: true }) dayName: string = '';
  @Input() day: Schedule[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 8; ++i) {
      const lesson: Schedule[] = this.day.filter(
        (el) => el.lesson_number == String(i + 1)
      );
      this.scheduleList.push(lesson)
    }
  }
}
