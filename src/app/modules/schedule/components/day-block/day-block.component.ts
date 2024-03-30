import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlainLesson } from '../../../../core/interfaces/plainLesson';
import { PairComponent } from '../pair/pair.component';

@Component({
  selector: 'app-day-block',
  standalone: true,
  imports: [CommonModule, PairComponent],
  templateUrl: './day-block.component.html',
  styleUrl: './day-block.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayBlockComponent implements OnInit {
  @Input() isWeekend: boolean = false;
  @Input({ required: true }) dayName: string = '';
  @Input() day: IPlainLesson[][]= []; // just pairs ex. [3, 4, 5]
  extendedDay: IPlainLesson [][] = []; // extended by empty pairs with their correct positions ex. [1, 2, 3, 4, 5, 6, 7, 8]
  ngOnInit(): void {
    const mappedDay = new Map(this.day.map(el => [el[0].lesson_number, el]))
    this.extendedDay = Array.from({ length: 8 }, (_, i) => mappedDay.get(`${i + 1}`) || [])
  }
}