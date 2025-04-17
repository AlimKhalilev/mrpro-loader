import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ldr-console',
	imports: [CommonModule, LdrIconComponent],
	templateUrl: './console.component.html',
	styleUrl: './console.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrConsoleComponent {
    copy() {}
}
