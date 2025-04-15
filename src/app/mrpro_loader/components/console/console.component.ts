import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ldr-console',
	imports: [],
	templateUrl: './console.component.html',
	styleUrl: './console.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrConsoleComponent {}
