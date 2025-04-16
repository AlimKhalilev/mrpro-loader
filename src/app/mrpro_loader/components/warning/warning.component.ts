import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';

@Component({
	selector: 'ldr-warning',
	imports: [LdrIconComponent],
	templateUrl: './warning.component.html',
	styleUrl: './warning.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrWarningComponent {
    /** Текст ошибки */
    @Input() text: string = '';
}
