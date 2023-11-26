import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './components/alarm/alarm.component';
import { ScheduleService } from '../../core/services/schedule.service';
import { IPlainLesson } from '../../core/interfaces/plainLesson';
import { DayBlockComponent } from './components/day-block/day-block.component';
import { ActivatedRoute, Route } from '@angular/router';
import { dayNames } from '../../core/constants/daynames';
import { IDay } from '../../core/interfaces/day';
import { from, groupBy, merge, mergeMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, AlarmComponent, DayBlockComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {}

  days: IDay[] = [];
  groupName: string = '';
  dayNames = dayNames;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.scheduleService.getScheduleById(id!).subscribe((res) => {
      this.groupName = res[0].group_name;
      from(res) // group plain lessons to days
        .pipe(
          groupBy((lesson) => lesson.day_number),
          mergeMap((group) => group.pipe(toArray()))
        )
        .subscribe((dayWithPlainLessons) => {
          let day: IDay = { schedule: [] };
          from(dayWithPlainLessons) // group to pairs
            .pipe(
              groupBy((lesson) => lesson.lesson_number),
              mergeMap((group) => group.pipe(toArray()))
            )
            .subscribe((pair) => {
              day.schedule.push(pair);
            });
          this.days.push(day);
        });
      this.changeDetector.markForCheck();
    });
  }
}
