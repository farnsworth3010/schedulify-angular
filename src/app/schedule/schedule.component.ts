import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from '../alarm/alarm.component';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../schedule';
import { DayBlockComponent } from '../day-block/day-block.component';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, AlarmComponent, DayBlockComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.sass',
})
export class ScheduleComponent implements OnInit {
  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute
  ) {}
  res: Schedule[] = [];
  days: Schedule[][] = [];
  groupName: string = '';
  dayNames = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.scheduleService.getScheduleById(+id!).subscribe((schedule) => {
      this.res = schedule;
      this.setSchedule();
    });
  }
  setSchedule() {
    let counter = 0;
    this.groupName = this.res[0].group_name;
    for (let i = 0; i < 7; ++i) {
      let day: Schedule[] = [];
      while (this.res[counter]?.day_number === String(i + 1)) {
        day.push(this.res[counter]);
        ++counter;
      }
      this.days.push(day);
    }
  }
}
