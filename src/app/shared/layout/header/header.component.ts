import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent implements DoCheck {
  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private location: Location 
  ) {}
  back() {
    this.location.back()
  }
  notHome = false;
  ngDoCheck(): void {
    this.notHome = this.router.url != '/' && this.router.url != '/home' ? true : false;
  }
}
