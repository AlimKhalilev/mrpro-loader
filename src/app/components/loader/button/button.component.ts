import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ldr-button',
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrButtonComponent {}
