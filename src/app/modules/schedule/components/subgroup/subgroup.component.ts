import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subgroup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subgroup.component.html',
  styleUrl: './subgroup.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubgroupComponent {

}
