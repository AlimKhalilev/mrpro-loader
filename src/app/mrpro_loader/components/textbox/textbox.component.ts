import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ldr-textbox',
	imports: [],
	templateUrl: './textbox.component.html',
	styleUrl: './textbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrTextboxComponent {}
