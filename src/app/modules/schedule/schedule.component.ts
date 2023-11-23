import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './alarm/alarm.component';
import { ScheduleService } from '../../core/services/schedule.service';
import { Schedule } from '../../core/interfaces/schedule';
import { DayBlockComponent } from './day-block/day-block.component';
import { ActivatedRoute, Route } from '@angular/router';
import { dayNames } from '../../core/constants/daynames';

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

  days: Schedule[][] = [];
  groupName: string = '';
  dayNames = dayNames;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.scheduleService.getScheduleById(id!).subscribe((schedule) => {
      this.setSchedule(schedule);
      this.changeDetector.markForCheck();
    });
  }
  setSchedule(res: Schedule[]) {
    this.groupName = res[0].group_name;
    for (let i = 0; i < 7; ++i) {
      let day: Schedule[] = [];
      res.forEach((x: Schedule) => {
        if (+x?.day_number == i + 1) day.push(x);
      });
      this.days.push(day);
    }
  }
}
