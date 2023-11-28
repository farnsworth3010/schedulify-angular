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
import {
  concatAll,
  concatMap,
  flatMap,
  from,
  groupBy,
  map,
  merge,
  mergeAll,
  mergeMap,
  switchMap,
  tap,
  toArray,
} from 'rxjs';

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

  days: IPlainLesson[][][]  = [];
  groupName: string = '';
  dayNames = dayNames;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.scheduleService
      .getScheduleById(id!).pipe(
        concatAll(),
        groupBy((lesson: IPlainLesson) => lesson.day_number),
        mergeMap((days) =>
          days.pipe(
            groupBy((el: IPlainLesson) => el.lesson_number),
            mergeMap((group) => group.pipe(toArray())),
            toArray()
          )
        ),
        toArray()
      )
      .subscribe((x) => {
        this.days = x;
        console.log(x)
        this.groupName = x[0][0][0].group_name;
        this.changeDetector.markForCheck();
      });
  }
}
