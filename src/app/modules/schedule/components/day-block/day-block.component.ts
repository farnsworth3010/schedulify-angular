import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from '../lesson/lesson.component';
import { IDay } from '../../../../core/interfaces/day';

@Component({
  selector: 'app-day-block',
  standalone: true,
  imports: [CommonModule, LessonComponent],
  templateUrl: './day-block.component.html',
  styleUrl: './day-block.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayBlockComponent implements OnInit {
  @Input() isWeekend: boolean = false;
  @Input({ required: true }) dayName: string = '';
  @Input() day: IDay = { schedule: [] }; // just pairs ex. [3, 4, 5]
  extendedDay: IDay = { schedule: [] }; // extended by empty pairs with their correct positions ex. [1, 2, 3, 4, 5, 6, 7, 8]
  ngOnInit(): void {
    for (let i = 0; i < 8; ++i) {
      this.extendedDay.schedule.push(
        this.day.schedule.find((pair) => +pair[0].lesson_number == i + 1) ?? []
      );
    }
  }
}
