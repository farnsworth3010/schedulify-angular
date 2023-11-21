import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  groupNames = {
    first: [
      { name: '23ИСИТ1д', id: 0 },
      { name: '23ПИнж1д', id: 0 },
      { name: '23ПМ1д', id: 0 },
      { name: '23УИР1д', id: 0 },
      { name: '23ФИЗ1д', id: 0 },
      { name: '23ФМО1д', id: 0 },
    ],
    second: [
      { name: '22ИСИТ1д', id: 0 },
      { name: '22МИ1д', id: 0 },
      { name: '22ПИ_ВЕБ1д', id: 0 },
      { name: '22ПИ_ПОКС1д', id: 0 },
      { name: '22ПМ1д', id: 0 },
      { name: '22ПОИТ1д', id: 0 },
      { name: '22УИР1д', id: 0 },
      { name: '22ФИЗ1д', id: 0 },
    ],
    third: [
      { name: '21ИСИТ1д', id: 0 },
      { name: '21КБ1д', id: 0 },
      { name: '21ПИ_ВЕБ1д', id: 0 },
      { name: '21ПИ_ПОКС1д', id: 0 },
      { name: '21ПМ1д', id: 0 },
      { name: '21ПОИТ1д', id: 0 },
      { name: '21УИР1д', id: 0 },
    ],
    forth: [
      { name: '41', id: 0 },
      { name: '42', id: 0 },
      { name: '43', id: 0 },
      { name: '44', id: 0 },
      { name: '45', id: 0 },
      { name: '48', id: 0 },
    ],
  };
}
