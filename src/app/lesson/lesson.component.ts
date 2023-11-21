import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.sass',
})
export class LessonComponent {
  @Input() lesson: Schedule[] = [];
  @Input() i: number = 0;
}
